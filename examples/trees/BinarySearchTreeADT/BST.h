#pragma once

#include "BSTNode.h"

#include <cstdint>

template <typename T>
class BST
{
    public:
        BST();

        void Insert(const T &key);

        void PrintInorder() const;
        void PrintPreorder() const;
        void PrintPostorder() const;

        void BFS() const;

        bool Search(const T &key) const;

        int32_t FindMin() const;
        int32_t FindMax() const;

        int32_t Successor(const T &key) const;
        int32_t Predecessor(const T &key) const;

        void Remove(const T &value);

    private:
        Node<T> * Insert(Node<T> * node, const int32_t &key);

        void PrintInorder(const Node<T> *node) const;
        void PrintPreorder(const Node<T> *node) const;
        void PrintPostorder(const Node<T> *node) const;

        void BFS(Node<T> *node) const;

        Node<T> * Search(Node<T> * node, const int32_t &key) const;

        int32_t FindMin(const Node<T> *node) const;
        int32_t FindMax(const Node<T> *node) const;

        int32_t Successor(Node<T> *node) const;
        int32_t Predecessor(Node<T> *node) const;

        Node<T> * Remove(Node<T> * node, const int32_t &key);

    private:
        Node<T> * m_Root;
};
