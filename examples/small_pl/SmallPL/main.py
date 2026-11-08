import sys

def expr_eval(s):
    toks = s.split()
    stack = []
    for tok in toks:
        if tok.isdigit():
            stack.append(int(tok))
        else: 
            rhs = stack.pop()
            lhs = stack.pop()
            if tok == "+": stack.append(lhs + rhs)
            if tok == "-": stack.append(lhs - rhs)
            if tok == "/": stack.append(lhs / rhs)
            if tok == "*": stack.append(lhs * rhs)
            
    print(toks)
    print(stack[0])

expr_eval(open(sys.argv[1]).read())
