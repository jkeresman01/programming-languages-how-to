#include "BinaryTree.h"

#include <iostream>
#include <queue>

template <typename T>
BinaryTree<T>::BinaryTree(const T &value)
{
    m_Root = CreateNode(value);
}

template <typename T>
BinaryTree<T>::~BinaryTree()
{
   FreeNode(m_Root); 
}

template <typename T>
void BinaryTree<T>::FreeNode(Node<T> *node)
{
    if(node == nullptr)
    {
        return;
    }

    FreeNode(node->Left);
    FreeNode(node->Right);
    delete node;
}

template <typename T>
void BinaryTree<T>::InsertLeft(Node<T> *parent, const T &value)
{
    parent->Left = CreateNode(value);
}

template <typename T>
void BinaryTree<T>::InsertRight(Node<T> *parent, const T &value)
{
    parent->Right = CreateNode(value);
}

template <typename T>
Node<T> *BinaryTree<T>::GetLeftChild(Node<T> *parent) const
{
    return parent->Left;
}

template <typename T>
Node<T> *BinaryTree<T>::GetRightChild(Node<T> *parent) const
{
    return parent->Right;
}

template <typename T>
void BinaryTree<T>::Inorder(Node<T> *parent) const
{
    if(parent == nullptr)
    {
        return;
    }

    Inorder(parent->Left);
    std::cout << parent->Value << " ";
    Inorder(parent->Right);
}

template <typename T>
void BinaryTree<T>::Preorder(Node<T> *parent) const
{
    if(parent == nullptr)
    {
        return;
    }

    std::cout << parent->Value << " ";
    Preorder(parent->Left);
    Preorder(parent->Right);
}

template <typename T>
void BinaryTree<T>::Postorder(Node<T> *parent) const
{
    if(parent == nullptr)
    {
        return;
    }

    Preorder(parent->Left);
    Preorder(parent->Right);
    std::cout << parent->Value << " ";
}

template <typename T>
void BinaryTree<T>::BFS(Node<T> *parent) const
{
    std::queue<Node<T> *> queue;
    queue.push(parent);

    while(!queue.empty())
    {
        Node<T> * current = queue.front();

        if(current->Left != nullptr)
        {
            queue.push(current->Left);
        }

        if(current->Right != nullptr)
        {
            queue.push(current->Right);
        }
        
        std::cout << current->Value << " ";
        queue.pop();
    }
}

template <typename T>
Node<T> *BinaryTree<T>::CreateNode(const T &value)
{
    Node<T> * node = new Node<T>(value);

    node->Right = nullptr;
    node->Left = nullptr;

    return node;
}

template <typename T>
Node<T> *BinaryTree<T>::GetRoot() const
{
    return m_Root;
}

template class BinaryTree<int32_t>;
