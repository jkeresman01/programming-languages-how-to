#include "Deque.h"

#include <iostream>

void FillDequeue(Deque<int32_t> &deque)
{
    // 26
    deque.EnqueueFront(26);

    // 26 - 78
    deque.EnqueueBack(78);

    // 26 - 78 - 44
    deque.EnqueueBack(44);

    // 91 - 26 - 78 - 44
    deque.EnqueueFront(91);

    // 35 - 91 - 26 - 78 - 44
    deque.EnqueueFront(25);

    // 35 - 91 - 26 - 78 - 44 - 12
    deque.EnqueueBack(12);
}

void PrintDeque(Deque<int32_t> &deque)
{
    while(!deque.IsEmpty())
    {
        std::cout << deque.Back() << " - ";
        deque.DequeueBack();
    }

    std::cout << "END" << "\r\n";
}

int main()
{
    Deque<int32_t> dequeue;
    FillDequeue(dequeue);
    PrintDeque(dequeue);
}
