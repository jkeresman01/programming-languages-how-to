namespace SeaLox.Lox;

internal static class SeaLox
{
    private static void Main(String[] args) 
    {
        var num1 = new Expr.Literal { Value = 2 };
        var num2 = new Expr.Literal { Value = 3 };

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
            Right = num2,
        };

        var astPrinter = new AstPrinter();

        var tree = new Expr.Binary
        {
            Left = new Expr.Literal { Value = 1.0 },
            Operator = new Token { TokenType = TokenType.Plus, Lexeme = "+", Line = 1 },
            Right = new Expr.Binary
            {
                Left = new Expr.Literal { Value = 2.0 },
                Operator = new Token { TokenType = TokenType.Star, Lexeme = "*", Line = 1 },
                Right = new Expr.Literal { Value = 3.0 }
            }
        };

        Console.WriteLine(astPrinter.Print(tree));
    }
}
