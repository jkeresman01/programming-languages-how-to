#include "AVL.h"

#include <algorithm>
#include <cstddef>

template <typename T>
void AVL<T>::Insert(const T &key)
{
    Insert(m_root, key);
}

template <typename T>
void AVL<T>::Remove(const T &key)
{
    Remove(m_root, key);
}

template <typename T>
int32_t AVL<T>::GetHeight(BSTNode<T> * node) const
{
    return node->Height;
}

template <typename T>
void AVL<T>::RotateRight(BSTNode<T> * node)
{
    BSTNode<T> * balancedNode = node->Left;

    balancedNode->Parent = node->Parent;
    node->Parent = balancedNode;

    node->Left = balancedNode->Right;

    if(balancedNode->Right != NULL)
    {
        balancedNode->Right->Parent = node;
    }

    balancedNode->Right = node;

    node->Height = std::max(
            GetHeight(node->Left), GetHeight(node->Right)) + 1;

    balancedNode->Height = std::max(
        GetHeight(balancedNode->Left), GetHeight(balancedNode->Right)) + 1;

    return balancedNode;
}

template <typename T>
void AVL<T>::RotateLeft(BSTNode<T> * node)
{
    BSTNode<T> * balancedNode = node->Right;

    balancedNode->Parent = node->Parent;

    node->Parent = balancedNode->Parent;
    node->Right = balancedNode->Left;

    if(balancedNode->Left != NULL)
    {
        balancedNode->Left->Parent = node;
    }

    balancedNode->Left = node;

    node->Height = std::max(
            GetHeight(node->Left), GetHeight(node->Right)) + 1;

    balancedNode->Height = std::max(
        GetHeight(balancedNode->Left), GetHeight(balancedNode->Right)) + 1;

    return balancedNode;
}

template <typename T>
void AVL<T>::Insert(BSTNode<T> * node, const T &key)
{
    if(node == NULL)
    {
        node = new BSTNode<T>;
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

    int balance = GetHeight(node->Left) - GetHeight(node->Right);

    if(balance == 2)
    {
        int32_t balance2 = GetHeight(node->Left->Left) - GetHeight(node->Left->Right);

        if(balance2 == 1)
        {
            node = RotateRight(node);
        }
        else
        {
            node->Left = RotateLeft(node->Left);
            node = RotateRight(node);
        }
    }
    else if (balance == -2)
    {
        int32_t balance2 = GetHeight(node->Right->Left) - GetHeight(node->Right->Right);

        if(balance2 == -1)
        {
            node = RotateLeft(node);
        }
        else
        {
            node->Right = RotateRight(node->Right);
            node = RotateLeft(node);
        }
    }
    node->Height = std::max(GetHeight(node->Left), GetHeight(node->Right)) + 1;

    return node;
}

template <typename T>
 BSTNode<T> AVL<T>::Remove(BSTNode<T> * node, const T &key)
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

   if(node != NULL)
   {
        int32_t balance = GetHeight(node->Left) - GetHeight(node->Right);

        if(balance == 2)
        {
            int32_t balance2 = GetHeight(node->Left->Left) - GetHeight(node->Left->Right);

            if(balance2 == 1)
            {
                node = RotateRight(node);
            }
            else
            {
                node->Left = RotateLeft(node->Left);
                node = RotateRight(node);
            }
        }
        else if (balance == 2)
        {
            int32_t balance2 = GetHeight(node->Right->Left) - GetHeight(node->Right->Right);

            if(balance2 == -1)
            {
                node = RotateLeft(node);
            }
            else
            {
                node->Right = RotateRight(node->Right);
                node = RotateLeft(node);
            }
        }

        node->Height = std::max(GetHeight(node->Left), GetHeight(node->Right)) + 1;
   }

   return node;
}
