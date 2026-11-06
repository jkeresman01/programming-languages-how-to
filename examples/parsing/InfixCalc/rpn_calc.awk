###########################################################################
# rpn_calc - reverse polish notation calculator
#
# input: arithmetic expressions in reverse polish notation
# output: value of each expression
#
# Expression in standard infix notation: (1 + 3) * (9 - 8) / 5
#
# Same expression written in reverse (operators follow their operands) 
# polish notation: 1 3 + 9 8 - * 5 /
#
###########################################################################
{
    for(i = 1; i <= NF; i++) {
        if($i ~ /^[+-]?([0-9]+[.]?[0-9]*|[.][0-9]+)$/) {
            stack[++top] = $i
        } else if($i == "+" && top > 1) {
            stack[top - 1] += stack[top];
            top--;
        } else if($i == "-" && top > 1) {
            stack[top - 1] -= stack[top];
            top--;
        }  else if($i == "*" && top > 1) {
            stack[top - 1] *= stack[top];
            top--;
        } else if($i == "/" && top > 1) {
            stack[top - 1] /= stack[top];
            top--;
        } else if($i == "^" && top > 1) {
            stack[top - 1] ^= stack[top];
            top--;
        } else {
            printf("error: cannot evaluate this nonsense: %s\n", $i)
            top = 0
            next
        }
    }

    if(top == 1) {
        printf("\t%.8g\n", stack[top--])
    } else if (top > 1) {
        printf("too many operands\n")
        top = 0
    }
}
