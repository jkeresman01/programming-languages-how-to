#include <iostream>
#include <cstdint>

#include "Stack.h"

void FillStack(Stack<int32_t> &stack)
{
    stack.Push(2);
    stack.Push(23);
    stack.Push(34);
    stack.Push(-10);
    stack.Push(23);
    stack.Push(2);
    stack.Push(345);
}

void PrintStack(Stack<int32_t> &stack)
{
    while(!stack.IsEmpty())
    {
        std::cout << stack.Top() << " - ";
        stack.Pop();
    }

    std::cout << "END" << "\r\n";
}

int main()
{
    Stack<int32_t> stack;
    FillStack(stack);
    PrintStack(stack);
}
