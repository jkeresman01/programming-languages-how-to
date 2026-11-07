#pragma once

#include <cstdint>

template <typename T>
struct  BSTNode
{
    T Key;

    BSTNode<T> * Left;
    BSTNode<T> * Right;

    BSTNode<T> * Parent;

    int32_t Height;
};
