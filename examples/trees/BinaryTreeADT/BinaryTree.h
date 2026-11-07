#pragma once

#include "Node.h"

template <typename T>
class BinaryTree
{
    public:
        BinaryTree(const T &value);
        ~BinaryTree();

        void InsertLeft(Node<T> * parent, const T &value);
        void InsertRight(Node<T> * parent, const T &value);

        Node<T> * GetLeftChild(Node<T> * parent) const;
        Node<T> * GetRightChild(Node<T> * parent) const;

        void Inorder(Node<T> * parent) const;
        void Preorder(Node<T> * parent) const;
        void Postorder(Node<T> * parent) const;

        void BFS(Node<T> * parent) const;

        Node<T> * GetRoot() const;

    private:
        Node<T> * CreateNode(const T &value);
        void FreeNode(Node<T> * node);

    private:
        Node<T> * m_Root;
};

