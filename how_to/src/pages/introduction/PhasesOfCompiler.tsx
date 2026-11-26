import Callout from '../../components/Callout';
import CodeBlock from '../../components/CodeBlock';
import BinaryExprTree from '../../components/BinaryExpressionTree';
import SyntaxTree from '../../components/SyntaxTree';
import NestedBinaryExprTree from '../../components/NestedBinaryExpression';

export default function PhasesOfCompiler() {
  return (
    <>
      <h1>Phases of a compiler/interpreter</h1>

      <p>
        Now that we understand what we're building, let's see which phases we need to
        go through, dummified a lot of course. The main question is:
        <i><strong> "How do we get from a high level language like Sealox to a series
        of instructions that a CPU can actually execute?"</strong></i>
      </p>

      <Callout type="tip">
        <p>
          The phases are roughly three: <strong>front end</strong>, <strong>middle
          end</strong> and <strong>back end</strong>.
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/BT2Cv-Tjq7Q?start=48&end=61"
          title="Artists built the Macintosh"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <p>
        So just listen, she was mindblowing, smoking hot, and beauty is subjective
        btw, but the phases are three. The <strong>front end</strong> is usuallyPhas
        specific to the source language: here we figure out what the poet was trying
        to say. In the <strong>middle end</strong>, now that we understand the poet,
        we can rephrase a bit while keeping the same meaning, which is where
        optimizations live: constant folding, loop unrolling and so on. Finally the
        <strong> back end</strong>: everything is optimized, so we generate machine
        instructions, either bytecode or code for a specific chip (x86, ARM...). We go
        back from poetry to reality, pure logic and instructions. Of course it's more
        complex than that, but let's leave it there.
      </p>

      <Callout type="note">
        <p><strong>Offtopic: </strong>
          If your mind isn't blown yet, like mine was, listen to this. The dude in the
          video drops IR (Intermediate Representation), and ohhhhh boy is it neat. If
          you want compilers for M languages targeting N architectures, naively you'd
          need M×N implementations, sounds painful, right? So each front end targets
          one intermediate representation, and each back end takes that IR and spits
          out native code. That turns M×N into M+N. It's the reason GCC supports so
          many languages and chips: every front end goes through an IR, mostly GIMPLE
          and RTL.
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/lflRnEfZgYQ?start=3&end=31"
          title="Intermediate representation and the MxN problem"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <Callout type="tip">
        <p><strong>Fun fact: </strong>
          Grace Hopper is credited with creating one of the first compilers (the A-0
          system, early 1950s). She also helped popularize the story of the first
          "actual bug", a moth found in the Harvard Mark II in 1947, though the
          operators who found it logged it, and engineers were calling glitches
          "bugs" long before that.
        </p>
      </Callout>

      <h2>Front end</h2>

      <p>
        Here we also have roughly three stages: scanning (lexing), parsing and static
        analysis.
      </p>

      <h3>Scanning</h3>

      <p>
        This stage pretty much boils down to one big dumb switch statement. We take a
        stream of characters and group them into tokens (words) that make up our
        language's grammar, ignoring the noise like comments and whitespace.
      </p>

      <p>
        You'll hear both "scanning" and "lexing". We'll say scanning, but "lexing" is
        arguably more correct, it comes from the Greek <i>lexis</i>, meaning "word".
        That's that, this mystery was quite easy. In practice people use the two terms
        interchangeably.
      </p>

      <h4>Concrete example</h4>

      <p>
        The purpose of scanning and parsing, the first two stages, is to recognize the
        structure of a program without caring about its meaning yet. What the hell
        does that mean? Let's go through a simple example:
      </p>

      <CodeBlock language="javascript" code={`var diana = "There is no zebra in here"`} />

      <p>
        The scanner reads characters one by one: <code>v</code>, <code>a</code>,
        <code>r</code>, a space, <code>d</code>, <code>i</code>... and groups them
        into tokens:
      </p>

      <CodeBlock
        language="javascript"
        code={`var                          -> keyword
diana                        -> identifier
=                            -> operator
"There is no zebra in here"  -> string literal`}
      />

      <p>
        <strong>Tokens</strong> are the basic building blocks of a program: the
        shortest strings of characters with an individual meaning (keywords,
        identifiers, operators, literals...).
      </p>

      <Callout type="tip">
        <p><strong>What is scanning (no BS explanation)</strong></p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/BI3K-ME3L74?start=163"
          title="What is scanning"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>

      </Callout>

      <h3>Parsing</h3>

      <p>
        The parser takes the flat list of tokens and gives it structure. It builds a
        tree out of them, usually called a syntax tree, where each node is a piece of
        the program and its children are the pieces it's made of. Take{' '}
        <code>1 + 2 * 3</code>. A flat list of tokens doesn't say whether to add or
        multiply first, but the tree does:
      </p>

      <SyntaxTree />

      <p>
        The multiplication sits lower in the tree, so it's evaluated first, which is
        precedence showing up as shape.
      </p>

      <p>
        Or said a bit differently, parsing organizes the tokens received from the
        scanner into a parse tree that represents higher level constructs
        (statements, expressions, subroutines and so on) in terms of their
        constituents. Each construct is a node in the tree and its constituents are
        its children. The root of the tree is simply a program, and the leaves, from
        left to right, are the tokens received from the scanner. Taken as a whole,
        the tree shows how the tokens fit together to make a valid program.
      </p>

      <h4>The abstract syntax tree</h4>

      <p>
        The AST for a program captures its behavior in such a way that it is easy for
        later stages of the compiler (e.g. code generation) to interpret. We
        basically want one object for each construct in the language, and the AST
        should closely model the language.
      </p>

      <h4>Defining the classes</h4>

      <p>
        To build that tree we need classes to represent it. First the tokens: a
        token remembers what kind it is, the text it came from, its value if it has
        one, and the line it was found on.
      </p>

      <CodeBlock
        language="csharp"
        code={`public enum TokenType
{
    // single-character tokens
    Plus, Minus, Star, Slash, LeftParen, RightParen,

    // literals
    Number, String, Identifier,

    Eof
}

public class Token
{
    public required TokenType TokenType { get; set; }
    public required string Lexeme { get; set; }   // the raw text, e.g. "+"
    public object? Literal { get; set; }          // the value of a literal, e.g. 2.0
    public required int Line { get; set; }        // where it was found
}`}
      />

      <p>
        Then the tree itself. We want one class per kind of expression, all sharing
        a common base class, <code>Expr</code>, so a node can hold "any expression"
        as a child. For now we need two kinds: a <code>Literal</code>, which holds a
        value, and a <code>Binary</code>, which has two sub-expressions and an
        operator between them.
      </p>

      <CodeBlock
        language="csharp"
        code={`public abstract class Expr
{
    public class Literal : Expr
    {
        public object? Value { get; set; }
    }

    public class Binary : Expr
    {
        public required Expr Left { get; set; }
        public required Token Operator { get; set; }
        public required Expr Right { get; set; }
    }
}`}
      />

      <p>
        Notice that <code>Left</code> and <code>Right</code> are of type{' '}
        <code>Expr</code>, not <code>Literal</code>. That is what makes the tree
        recursive: the child of a binary expression can be another binary
        expression.
      </p>

      <p>
        With those classes, the tree for <code>2 + 3</code> can be built by hand like
        this:
      </p>

      <CodeBlock
        language="csharp"
        code={`var num1 = new Expr.Literal { Value = 2.0 };
var num2 = new Expr.Literal { Value = 3.0 };

var op = new Token
{
    TokenType = TokenType.Plus,
    Lexeme = "+",
    Literal = null,
    Line = 1
};

var binaryExpr = new Expr.Binary
{
    Left = num1,
    Operator = op,
    Right = num2
};`}
      />

      <h4>Parser basics</h4>

      <p>
        Writing trees by hand is only for illustration. The parser's job is to
        produce exactly this structure from the token list, and we'll write it in
        the Sealox chapter, where the class list grows to include unary
        expressions, grouping with parentheses and variables.
      </p>

      <p>
        The basic idea of parsing is that we want to take something like{' '}
        <code>2 + 3</code>, which the scanner hands over as three tokens (a number
        token <code>2</code>, a plus token and a number token <code>3</code>), and
        turn it into an AST. For this expression the tree is one binary node with two
        literals and an operator:
      </p>

      <BinaryExprTree />

       <p>
        And because a <code>Binary</code> can contain another <code>Binary</code>,
        the tree for <code>1 + 2 * 3</code> from the top of this section is just
        nesting:
      </p>

      <CodeBlock
        language="csharp"
        code={`var tree = new Expr.Binary
{
    Left = new Expr.Literal { Value = 1.0 },
    Operator = new Token { TokenType = TokenType.Plus, Lexeme = "+", Line = 1 },
    Right = new Expr.Binary
    {
        Left = new Expr.Literal { Value = 2.0 },
        Operator = new Token { TokenType = TokenType.Star, Lexeme = "*", Line = 1 },
        Right = new Expr.Literal { Value = 3.0 }
    }
};`}/>

     <NestedBinaryExprTree/>

       <p>The structure of the tree relies on a set of muttualy recursive rules known
       as <i>context-free-grammar</i>. Each rule has as arrow sign with a construct
       name on the left and a possible expession on the right. In <code>C</code>
       for example and most C-like languages, a <code>while</code> loop consist of
       the keyword <code>while</code> followed by a parenthesized Boolean expression
       and a statement.</p>


      <CodeBlock language="awk" code ={`iteration-statement -> while (expression) statement`}/>

      <p>The statement, in turn is often a list enclosed in braces: </p>
 
      <CodeBlock language="awk" code ={`
statement -> compound-statement 
compound-statement ->  { block-item-list-opt }`}/>

     <p>where: </p>

     <CodeBlock language="awk" code ={`block-item-list-opt -> block-item-list`}/>

     <p>or</p>

     <CodeBlock language="awk" code={`block-item-list-opt -> ε`} />

     <p>and</p>

      <CodeBlock language="awk" code ={`
block-item-list-opt -> block-item
block-item-list-opt -> block-item-list block-item
block-item -> declaration
block-item -> statement`}/>

    <p>Here <code>ε</code> means the empty string; it indicates that
    <code>block-item-list-opt</code> can simply be deleted.</p>

    <p>Many more grammar rules are ofcouse needed to explain the full structure of
    a program</p>

    <p>
     In the process of <code>scanning</code> and <code>parsing</code> the compiler
     or interpreter checks that all of the programs tokens are well formed and
     that sequences of tokens conform to the <code>syntax</code> defined by the
     <i>context-free-grammar</i>
    </p>

    <p>Or in plain english: any malformed token (eg. 123milica in C) should cause
    scanner to produce and error, any syntacly invalid token sequnce should lead to
    an error message reported from the parser. (eg. A = X Y Z in C).</p>

      <h3>Static analysis</h3>

      <p>
        The first two stages, scanning and parsing, tend to be boring and dull, pretty
        much the same across all implementations. At this point we know the syntactic
        structure of the code - things like which expressions are nested in which,
        but we don't know much more than that. Static analysis is where the individual
        quirks of each language come into play. This is where we figure out what names
        refer to (binding) and, in a statically typed language, check that the types
        line up, all before the program runs.
      </p>

      <h2>Middle end</h2>

      <p>
        We now understand what the poet tried to say, we can rephrase it a bit while
        keeping the same <strong>semantics</strong>, while sneaking in some optimizations
        along the way.
      </p>

      <p>
        Optimization is a weird and complex topic of its own, most of it happens on the
        intermediate representation, though not all, and one can spend decades on it.
        It's a huge rabbit hole with a bunch of fancy words: "strength reduction",
        "scalar replacement of aggregates", "loop invariant code motion", "common
        subexpression elimination"... Some languages keep it cute and simple,
        generating relatively unoptimized code and rolling on. Lua tends to do just
        that.
      </p>

      <Callout type="note">
        <p><strong>Constant folding</strong></p>

        <p>A simple example of this is constant folding, if some expressions always
           evaluate to the same result, we can do the evaluation at the compile time.
         </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/68oO51ZQyHY?start=170&end=193"
          title="Constant folding"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <p>Seriously people can spend their entire careers only thinking about
      optimizations and performance, it can become an obsession of its own, we will
      just give a small overview of what can be done: </p>


      <Callout type="note">
        <p><strong>What compilers can and cannot do</strong></p>

        <p>
          A short summary in terms of the Bentley rules for optimizing work, and some
          more:
        </p>

        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ulJm7_aTiQM?start=828&end=1070"
          title="What compilers can and cannot optimize"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ borderRadius: '8px', border: '1px solid var(--border)' }}>
        </iframe>
      </Callout>

      <h2>Back end</h2>

      <p>
        Finally we're at the back end, and it's time to go from poetry to reality:
        from the user's source code to more primitive, assembly-like instructions the
        machine can understand. Here we pick a target. We can generate bytecode for a
        virtual machine, which is portable but needs that VM to run, or native machine
        code for a specific architecture, which is fast but tied to that hardware.
        Phase 5 takes the native route.
      </p>


      <h2>Which phases do our projects use?</h2>

      <p>
        Not every implementation uses all three phases, and that's exactly why we
        build five of them:
      </p>

      <ul>
        <li><strong>Phases 1 and 2 (Jlox, Sealox):</strong> front end only. We scan,
        parse and analyze, then execute by walking the tree directly. No middle end,
        no back end.</li>
        <li><strong>Phase 3 (functional Lox):</strong> same front end, different style
        of building it.</li>
        <li><strong>Phase 4 (Luapp):</strong> front end, then instead of machine code
        we generate Lua source. Lua's own implementation does the rest.</li>
        <li><strong>Phase 5 (Jlang):</strong> the whole pipeline. We build the front
        end and emit LLVM IR, and LLVM handles the middle end and back end.</li>
      </ul>

    </>
  );
}
