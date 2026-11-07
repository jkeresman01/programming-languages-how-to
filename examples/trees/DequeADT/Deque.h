#pragma once

#include "Node.h"

#include <cstdint>

template <typename T>
class Deque
{
    public:
        Deque();

        bool IsEmpty() const;

        T Front() const;
        T Back() const;

        void EnqueueFront(const T &value);
        void EnqueueBack(const T &value);

        void DequeueFront();
        void DequeueBack();

    private:
        int32_t m_Count;

        Node<T> * m_Front;
        Node<T> * m_Back;;
};
