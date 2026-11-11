import ast
import dis

class ReplaceBinOp(ast.NodeTransformer):
    def visit_BinOp(self, node):
        return ast.BinOp(left=node.left, op=ast.Sub(), right=node.right)

tree = ast.parse("x = 5/2")
ast.fix_missing_locations(tree)
eval(compile(tree, '', 'exec'))
# print(ast.dump(tree))
print(x)

tree = ReplaceBinOp().visit(tree)
ast.fix_missing_locations(tree)
eval(compile(tree, '', 'exec'))
# print(ast.dump(tree))
print(x)

def eat():
    return 42

# print(dis.code_info(ast.parse))
# print(dis.dis(ast.parse))

hello_beta = ast.Str(s='I didnt play that')
print_nonsene = ast.Name(id='print', ctx=ast.Load())
print_call = ast.Call(func=print_nonsene, ctx=ast.Load(), args=[hello_beta], keywords=[])
module = ast.Module(body=[ast.Expr(print_call)], type_ignores=[])
module = ast.fix_missing_locations(module)
code = compile(module, '', 'exec')
eval(code)
