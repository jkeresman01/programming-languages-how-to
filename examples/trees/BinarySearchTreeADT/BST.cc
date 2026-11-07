#include "BST.h"

#include <cstddef>
#include <iostream>
#include <queue>

template <typename T>
BST<T>::BST() { }

template <typename T>
void BST<T>::Insert(const T &key)
{
    m_Root = Insert(m_Root, key);
}

template <typename T>
void BST<T>::PrintInorder() const
{
    PrintInorder(m_Root);  
}

template <typename T>
void BST<T>::PrintPreorder() const
{
    PrintPreorder(m_Root);  
}

template <typename T>
void BST<T>::PrintPostorder() const
{
    PrintPostorder(m_Root);    
}

template <typename T>
void BST<T>::BFS() const
{
    BFS(m_Root);
}

template <typename T>
int32_t BST<T>::FindMin() const
{
    return FindMin(m_Root);
}

template <typename T>
int32_t BST<T>::FindMax() const
{
    return FindMax(m_Root);
}

template <typename T>
int32_t BST<T>::Successor(const T &key) const
{
    Node<T> * keyNode = Search(m_Root, key);
    return keyNode == NULL ? -1 : Successor(keyNode);
}

template <typename T>
int32_t BST<T>::Predecessor(const T &key) const
{
    Node<T> * keyNode = Search(m_Root, key);
    return keyNode == NULL ? -1 : Predecessor(keyNode);
}

template <typename T>
void BST<T>::Remove(const T &value)
{
    m_Root = Remove(m_Root, value);
}

template <typename T>
bool BST<T>::Search(const T &key) const
{
    Node<T> * result = Search(m_Root, key);
    return result != NULL;
}

template <typename T>
Node<T> *BST<T>::Insert(Node<T> *node, const int32_t &key)
{

    if(node == NULL)
    {
        node = new Node<T>;
        node->Key = key;
        node->Left = NULL;
        node->Right = NULL;
        node->Parent = NULL;
    } 
    else if(node->Key < key)
    {
        node->Right = Insert(node->Right, key);
        node->Right->Parent = node;
    }
    else
    {
        node->Left = Insert(node->Left, key);
        node->Left->Parent = node;
    }

    std::cout << "Here: " << node->Key << " " << std::endl;

    return node;
}

template <typename T>
void BST<T>::BFS(Node<T> *node) const
{
    std::queue<Node<T> *> queue;

    queue.push(node);

    while(!queue.empty())
    {
        Node<T> * current = queue.front();

        if(current->Left != NULL)
        {
            queue.push(current->Left);
        }

        if(current->Right != NULL)
        {
            queue.push(current->Right);
        }

        std::cout << current->Key << " ";

        queue.pop();
    }
}

template <typename T>
void BST<T>::PrintInorder(const Node<T> *node) const
{
    std::cout << node->Key << std::endl;
    if(node == NULL)
    {
        return;
    }

    PrintInorder(node->Left);
    std::cout << node->Key << " ";
    PrintInorder(node->Right);
}

template <typename T>
void BST<T>::PrintPreorder(const Node<T> *node) const
{
    if(node == NULL)
    {
        return;
    }

    std::cout << node->Key << " ";
    PrintPreorder(node->Left);
    PrintPreorder(node->Right);
}

template <typename T>
void BST<T>::PrintPostorder(const Node<T> *node) const
{

    if(node == NULL)
    {
        return;
    }

    PrintPostorder(node->Left);
    PrintPostorder(node->Right);
    std::cout << node->Key << " ";
}

template <typename T>
Node<T> *BST<T>::Search(Node<T> *node, const int32_t &key) const
{
    if(node == NULL)
    {
        return NULL;
    }
    else if (node->Key == key)
    {
        return node;
    }
    else if(node->Key < key)
    {
        return Search(node->Right, key);
    }
    else
    {
        return Search(node->Left, key);
    }
}

template <typename T>
int32_t BST<T>::FindMin(const Node<T> *node) const
{
    if(node == NULL)
    {
        return -1;
    }
    else if(node->Left == NULL)
    {
        return node->Key;
    }
    else
    {
        return FindMin(node->Left);
    }
}

template <typename T>
int32_t BST<T>::FindMax(const Node<T> *node) const
{
    if(node == NULL)
    {
        return -1;
    }
    else if (node->Right == NULL)
    {
        return node->Key;
    }
    else
    {
        return FindMax(node->Right);
    }
}

template <typename T>
int32_t BST<T>::Successor(Node<T> *node) const
{
    if(node->Right != NULL)
    {
        return FindMin(node->Right);
    }
    else
    {
        Node<T> * parentNode = node->Parent;
        Node<T> * currentNode = node;

        while((parentNode != NULL) && (currentNode == parentNode->Right))
        {
            currentNode = parentNode;
            parentNode = currentNode->Parent;
        }

        return parentNode == NULL ? -1 : parentNode->Key;
    }
}

template <typename T>
int32_t BST<T>::Predecessor(Node<T> *node) const
{
    if(node->Left != NULL)
    {
        return FindMax(node->Left);
    }
    else
    {
        Node<T> * parentNode = node->Parent;
        Node<T> * currentNode = node;

        while((parentNode != NULL) && (parentNode == parentNode->Parent))
        {
            currentNode = parentNode;
            parentNode = currentNode->Parent;
        }

        return parentNode == NULL ? -1 : parentNode->Key;
    }
}

template <typename T>
Node<T> *BST<T>::Remove(Node<T> *node, const int32_t &key)
{
   if(node == NULL)
   {
       return NULL;
   }
        
   if(node->Key == key)
   {
        if(node->Left == NULL && node->Right == NULL)
        {
            node = NULL;
        }
        else if(node->Left == NULL && node->Right != NULL)
        {
            node->Right->Parent = node->Parent;
            node = node->Right;
        }
        else if(node->Right != NULL && node->Right == NULL)
        {
            node->Left->Parent = node->Parent;
            node = node->Left;
        }
        else
        {
            int32_t successorKey = Successor(key);
            node->Key = successorKey;
            node->Right = Remove(node->Right, successorKey);
        }
   }
   else if(node->Key < key)
   {
        node->Right = Remove(node->Right, key);
   }
   else
   {
        node->Left = Remove(node->Left, key);
   }

   return node;
}

template class BST<int32_t>;
