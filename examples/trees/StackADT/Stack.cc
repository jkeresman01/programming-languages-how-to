#include "Stack.h"

#include <cstddef>

template <typename T>
Stack<T>::Stack() : m_Top(NULL), m_Count(0) {}

template <typename T>
bool Stack<T>::IsEmpty() const
{
    return m_Count == 0;
}

template <typename T>
T Stack<T>::Top() const
{
    return m_Top->Value;
}

template <typename T>
void Stack<T>::Push(const T &value)
{
    Node<T> * node = new Node<T>(value);

    node->Next = m_Top;

    m_Top = node;

    m_Count++;
}

template <typename T>
void Stack<T>::Pop()
{
   if(IsEmpty())
   {
        return;
   }

   Node<T> * node = m_Top;

   m_Top = node->Next;

   delete node;

   m_Count--;
}

template class Stack<int32_t>;
