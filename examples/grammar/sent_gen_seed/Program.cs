// sentgen - Random sentence generator
// Usage: dotnet run -- [grammar-file] [input-file] [optional-random-seed]
//
// Grammar format: one production per line, e.g. S -> NP VP
// Input format: one start symbol per line.

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

internal sealed class Production
{
    public List<string> Symbols { get; }

    public Production(IEnumerable<string> symbols) =>  Symbols = symbols.ToList();
}

internal sealed class SentenceGenerator
{
    private readonly Dictionary<string, List<Production>> _rules =
        new(StringComparer.Ordinal);
    private readonly Random _random;
    private readonly int _maxDepth;

    public SentenceGenerator(Random random, int maxDepth = 100)
    {
        _random = random;
        _maxDepth = maxDepth;
    }

    public void LoadGrammar(string path)
    {
        int lineNumber = 0;

        foreach (string originalLine in File.ReadLines(path))
        {
            lineNumber++;
            string line = originalLine.Trim();

            if (line.Length == 0 || line.StartsWith("#", StringComparison.Ordinal))
                continue;

            string[] tokens = line.Split(
                (char[]?)null,
                StringSplitOptions.RemoveEmptyEntries);

            if (tokens.Length < 3 || tokens[1] != "->")
            {
                Console.Error.WriteLine(
                    $"Illegal production at {path}:{lineNumber}: {originalLine}");
                continue;
            }

            string lhs = tokens[0];
            var production = new Production(tokens.Skip(2));

            if (!_rules.TryGetValue(lhs, out List<Production>? alternatives))
            {
                alternatives = new List<Production>();
                _rules[lhs] = alternatives;
            }

            alternatives.Add(production);
        }
    }

    public bool ContainsNonterminal(string symbol) => _rules.ContainsKey(symbol);

    public string Generate(string startSymbol)
    {
        if (!ContainsNonterminal(startSymbol))
            throw new ArgumentException(
                $"Unknown nonterminal: {startSymbol}", nameof(startSymbol));

        var output = new List<string>();
        Expand(startSymbol, output, 0);
        return string.Join(" ", output);
    }

    private void Expand(string symbol, List<string> output, int depth)
    {
        if (depth > _maxDepth)
        {
            throw new InvalidOperationException(
                $"Maximum expansion depth ({_maxDepth}) exceeded. " +
                $"The grammar may contain an unbounded recursive production.");
        }

        if (!_rules.TryGetValue(symbol, out List<Production>? alternatives))
        {
            // A symbol with no production is a terminal.
            output.Add(symbol);
            return;
        }

        Production chosen = alternatives[_random.Next(alternatives.Count)];

        foreach (string rhsSymbol in chosen.Symbols)
            Expand(rhsSymbol, output, depth + 1);
    }
}

internal static class Program
{
    private static int Main(string[] args)
    {
        string grammarPath = args.Length > 0 ? args[0] : "grammar.txt";
        string inputPath = args.Length > 1 ? args[1] : "input.txt";

        if (!File.Exists(grammarPath))
        {
            Console.Error.WriteLine($"Grammar file not found: {grammarPath}");
            return 1;
        }

        if (!File.Exists(inputPath))
        {
            Console.Error.WriteLine($"Input file not found: {inputPath}");
            return 1;
        }

        int? seed = null;
        if (args.Length > 2)
        {
            if (!int.TryParse(args[2], out int parsedSeed))
            {
                Console.Error.WriteLine("The optional seed must be an integer.");
                return 1;
            }
            seed = parsedSeed;
        }

        var generator = new SentenceGenerator(
            seed.HasValue ? new Random(seed.Value) : new Random());

        generator.LoadGrammar(grammarPath);

        foreach (string line in File.ReadLines(inputPath))
        {
            string[] tokens = line.Split(
                (char[]?)null,
                StringSplitOptions.RemoveEmptyEntries);

            if (tokens.Length == 0 || line.TrimStart().StartsWith("#", StringComparison.Ordinal))
                continue;

            string startSymbol = tokens[0];

            if (!generator.ContainsNonterminal(startSymbol))
            {
                Console.WriteLine($"Unknown nonterminal: {line.Trim()}");
                continue;
            }

            try
            {
                Console.WriteLine(generator.Generate(startSymbol));
            }
            catch (InvalidOperationException ex)
            {
                Console.Error.WriteLine($"Could not generate '{startSymbol}': {ex.Message}");
            }
        }

        return 0;
    }
}
