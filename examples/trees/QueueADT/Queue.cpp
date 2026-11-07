#include "Queue.h"

#include <cstddef>

template <typename T>
Queue<T>::Queue() : m_Count(0), m_Front(NULL), m_Back(NULL) {}

template <typename T>
bool Queue<T>::IsEmpty() const
{
    return m_Count == 0;
}

template <typename T>
T Queue<T>::Front() const
{
    return m_Front->Value;
}

template <typename T>
void Queue<T>::Enqueue(const T &value)
{
    Node<T> * node = new Node<T>(value);

    if(IsEmpty())
    {
        node->Next = NULL;
        m_Front = node;
        m_Back = m_Front;
    }
    else
    {
        m_Back->Next = node;
        m_Back = node;
    }

    m_Count++;
}

template <typename T>
void Queue<T>::Dequeue()
{
    if(IsEmpty())
    {
        return;
    }

    Node<T> * node = m_Front;

    m_Front = m_Front->Next;

    delete node;

    m_Count--;
}

template class Queue<int32_t>;
