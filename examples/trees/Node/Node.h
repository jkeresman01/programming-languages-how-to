#pragma once

template <typename T>
struct  Node
{
    T Value;
    Node<T> * Next;

    Node(const T value) : Value(value){};
};
