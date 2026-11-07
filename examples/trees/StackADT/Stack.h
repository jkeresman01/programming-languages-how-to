#pragma once

#include "Node.h"

#include <cstdint>

template <typename T>
class Stack
{
    public:
        Stack();

        bool IsEmpty() const;
        T Top() const;

        void Push(const T &value);
        void Pop();

    private:
        uint32_t m_Count;
        Node<T> * m_Top;
};
