namespace SeaLox.Lox;

internal static class SeaLox
{
    private static void Main(string[] args)
    {
        var num1 = new Expr.Literal { Value = 2 };
        var num2 = new Expr.Literal { Value = 2 };

        var plusOp = new Token
        {
            TokenType = TokenType.Plus,
            Lexeme = "+",
            Literal = null,
            Line = 1
        };

        var binaryExpr = new Expr.Binary
        {
            Left = num1,
            Operator = plusOp,
            Right = num2
        };

        var minusOp = new Token 
        {
            TokenType = TokenType.Minus,
            Lexeme = "*",
            Literal = null,
            Line = 1,
        };

        var tada = new Expr.Binary
        {
            Left = num1,
            Operator = plusOp,
            Right = binaryExpr
        };

        Console.WriteLine(new AstPrinter().Print(tada));
    }

}
