#pragma once

#include "BSTNode.h"

#include <cstdint>

template <typename T>
class BST
{
    public:
        BST();

        virtual void Insert(const T &key);
        virtual void Remove(const T &value);

        void PrintInorder() const;
        void PrintPreorder() const;
        void PrintPostorder() const;

        void BFS() const;

        bool Search(const T &key) const;

        int32_t FindMin() const;
        int32_t FindMax() const;

        int32_t Successor(const T &key) const;
        int32_t Predecessor(const T &key) const;

    protected:
        virtual BSTNode<T> * Insert(BSTNode<T> * node, const int32_t &key);

        virtual void PrintInorder(const BSTNode<T> *node) const;
        virtual void PrintPreorder(const BSTNode<T> *node) const;
        virtual void PrintPostorder(const BSTNode<T> *node) const;

        virtual void BFS(BSTNode<T> *node) const;

        virtual BSTNode<T> * Search(BSTNode<T> * node, const int32_t &key) const;

        virtual int32_t FindMin(const BSTNode<T> *node) const;
        virtual int32_t FindMax(const BSTNode<T> *node) const;

        virtual int32_t Successor(BSTNode<T> *node) const;
        virtual int32_t Predecessor(BSTNode<T> *node) const;

        virtual BSTNode<T> * Remove(BSTNode<T> * node, const int32_t &key);

    private:
        BSTNode<T> * m_Root;
};
