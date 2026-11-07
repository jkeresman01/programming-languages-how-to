#include <iostream>

#include "Queue.h"

void FillQueue(Queue<int32_t> &queue)
{
    queue.Enqueue(35);
    queue.Enqueue(-21);
    queue.Enqueue(10);
    queue.Enqueue(15);
    queue.Enqueue(100);
    queue.Enqueue(-2333);
}

void PrintQueue(Queue<int32_t> &queue)
{
    while(!queue.IsEmpty())
    {
        std::cout << queue.Front() << " - ";
        queue.Dequeue();
    }

    std::cout << "END" << "\r\n";
}

int main()
{
    Queue<int32_t> queue;
    FillQueue(queue);
    PrintQueue(queue);
}
