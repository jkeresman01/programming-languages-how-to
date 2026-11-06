###########################################################################
# infix_calc - Recursive descent parser for arithmetic expressions
#
# input:    arithmetic expressions in standard infix notation
# output:   value of each expression
#
# Arithmetic expressions with the operators: +,-,/,* can be 
# expressed with grammar like this:
#
#  expr -> term
#          expr + term
#          expr - term
#
#  term -> factor
#          term * factor
#          term / factor
#
#  factor -> number
#            ( expr )
#
#
# For example expression in standard infix notation 1 + 2 * 3 is parsed like this:
#
#                   expr
#                 /  |  \
#                /   |   \
#               /    |    \
#             exp    |    term
#              |     |     /|\
#              |     |    / | \
#             term   | term |  \
#              |     |   |  |   \
#              |     |   |  |    \
#             factor |factor|   factor
#              |     |   |  |      |
#              |     |   |  |      |
#             number |number|    number
#              |     |   |  |      |
#              |     |   |  |      |
#              1     +   2  *      3
#
#
###########################################################################

NF > 0 {
    gsub(/[+\-*\/()]/, " & ") #Insert spaces around operators and parantheses
    nf = split($0, op)
    f = 1
    e = expr()

    if (f <= nf)
        printf("error at %s\n", op[f])
    else 
        printf("\t%.8g\n", e)
}

function expr(e) {
    e = term()
    while(op[f] == "+" || op[f] == "-") 
        e = op[f++] == "+" ? e + term() : e - term()
    return e
}


function term(e) {
    e = factor()
    while(op[f] == "*" || op[f] == "/")
        e = op[f++] == "*" ? e * factor() : e / factor()
    return e
}

function factor(e) {
    if(op[f] ~ /^[+-]?([0-9]+[.]?[0-9]*|[.][0-9]+)$/) {
        return op[f++]
    } else if (op[f] = "(") {
        f++
        e = expr()
        if(op[f++] != ")")
            printf("error: missing ) at %s\n", op[f])
        return e
    } else {
       printf("erro: expected number or ( at %s", op[f])
    }
}


