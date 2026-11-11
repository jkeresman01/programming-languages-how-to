namespace SeaLox.Lox;

internal static class SeaLox
{
    private static void Main(String[] args) 
    {
        var num1 = new Expr.Literal { Value = 123 };
        var num2 = new Expr.Literal { Value = 23 };

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

        Console.WriteLine("Binary expression: ");
        Console.WriteLine(astPrinter.Print(binaryExpr));
        Console.WriteLine("Unary expression: ");

        var opMinus = new Token 
        {
            TokenType = TokenType.Minus,
            Lexeme = "-",
            Literal = null,
            Line = 1
        };

        var rndNum = new Expr.Literal { Value = 123 };

        var unaryExpr = new Expr.Unary 
        {
            Operator = opMinus,
            Right = rndNum
        };

        Console.WriteLine(astPrinter.Print(unaryExpr));

        var grouping = new Expr.Grouping { Expression = binaryExpr };
        var binExpr = new Expr.Binary 
        { 
            Left = binaryExpr,
            Operator = op,
            Right = grouping
        };

        Console.WriteLine("Grouping:");
        Console.WriteLine(astPrinter.Print(binExpr));
    }

}
