#pragma once

#include "BST.h"

template <typename T>
class AVL : public BST<T>
{
    public:
        AVL();

        void Insert(const T &key) override;
        void Remove(const T &key) override;

    private:
        int32_t GetHeight(BSTNode<T> * node) const;

        void RotateRight(BSTNode<T> * node);
        void RotateLeft(BSTNode<T> * node);

        void Insert(BSTNode<T> * node, const T &key);
        BSTNode<T> Remove(BSTNode<T> * node, const T &key);

    private:
        BSTNode<T> * m_root;
};
