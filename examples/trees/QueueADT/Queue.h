#pragma once

#include "Node.h"

#include <cstdint>

template <typename T>
class Queue
{
    public:
        Queue();

        bool IsEmpty() const;
        T Front() const;

        void Enqueue(const T &value);
        void Dequeue();


    private:
        int32_t m_Count;

        Node<T> * m_Front;
        Node<T> * m_Back;
};
