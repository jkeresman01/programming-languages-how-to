#include "Deque.h"

#include <cstddef>

template <typename T>
Deque<T>::Deque() : m_Count(0), m_Front(NULL), m_Back(NULL) {}

template <typename T>
bool Deque<T>::IsEmpty() const
{
    return m_Count == 0;
}

template <typename T>
T Deque<T>::Front() const
{
    return m_Front->Value;
}

template <typename T>
T Deque<T>::Back() const
{
    return m_Back->Value;
}

template <typename T>
void Deque<T>::EnqueueFront(const T &value)
{
    Node<T> * node = new Node<T>(value);

    node->Next = m_Front;

    if(m_Front != NULL)
    {
        m_Front->Previous = node;
    }

    m_Front = node;

    if(m_Count == 0)
    {
        m_Back = m_Front;
    }

    m_Count++;
}

template <typename T>
void Deque<T>::EnqueueBack(const T &value)
{
    if(m_Count == 0)
    {
        EnqueueFront(value);
        return;
    }

    Node<T> * node = new Node<T>(value);

    m_Back->Next = node;

    node->Previous = m_Back;

    m_Back = node;

    m_Count++;
}

template <typename T>
void Deque<T>::DequeueFront()
{
    if(m_Count == 0)
    {
        return;
    }

    Node<T> * node = m_Front;

    m_Front = m_Front->Next;

    delete node;

    if(m_Front != NULL)
    {
        m_Front->Previous = NULL;
    }

    m_Count--;
}

template <typename T>
void Deque<T>::DequeueBack()
{
    if(m_Count == 0)
    {
        return;
    }

    if(m_Count == 1)
    {
        DequeueFront();
        return;
    }

    Node<T> * node = m_Back;

    m_Back = m_Back->Previous;

    m_Back->Next = NULL;

    delete node;

    m_Count--;
}

template class Deque<int32_t>;
