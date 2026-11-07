#pragma once

template <typename T>
struct  Node
{
    T Value;

    Node<T> * Left;
    Node<T> * Right;

    Node(const T value) : Value(value){};
};
