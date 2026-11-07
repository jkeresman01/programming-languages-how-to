#pragma once

template <typename T>
struct  Node
{
    T Key;

    Node<T> * Left;
    Node<T> * Right;
    Node<T> * Parent;
};
