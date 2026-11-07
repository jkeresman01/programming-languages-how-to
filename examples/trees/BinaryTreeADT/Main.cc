#include "BinaryTree.h"

#include <iostream>

void FillBinaryTree(BinaryTree<int32_t> &binaryTree)
{
    Node<int32_t> * root = binaryTree.GetRoot();

    /*
     *         10
     *       /    \
     *     12      13
     */
    binaryTree.InsertLeft(root, 12);
    binaryTree.InsertRight(root, 13);

    /*
     *         10
     *       /    \
     *     12      13
     *              \
     *               17
     *
     */
    Node<int32_t> * node13 = binaryTree.GetRightChild(root);
    binaryTree.InsertRight(node13, 17);

    /*
     *         10
     *       /    \
     *     12      13
     *             / \
     *           15   17
     *
     */
    binaryTree.InsertLeft(node13, 15);

    /*
     *         10
     *       /    \
     *     12      13
     *    /        / \
     *  44       15   17
     *
     */
    Node<int32_t> * node12 = binaryTree.GetLeftChild(root);
    binaryTree.InsertLeft(node12, 44);
}

void BFS(BinaryTree<int32_t> &binaryTree)
{
    Node<int32_t> * root = binaryTree.GetRoot();

    std::cout << "BFS: ";
    binaryTree.BFS(root);
    std::cout << "\r\n";
}

void Preorder(BinaryTree<int32_t> &binaryTree)
{
    Node<int32_t> * root = binaryTree.GetRoot();
    
    std::cout << "PREORDER: ";
    binaryTree.Preorder(root);
    std::cout << "\r\n";
}

void Inorder(BinaryTree<int32_t> &binaryTree)
{
    Node<int32_t> * root = binaryTree.GetRoot();

    std::cout << "INORDER: ";
    binaryTree.Inorder(root);
    std::cout << "\r\n";
}

void Postorder(BinaryTree<int32_t> &binaryTree)
{
    Node<int32_t> * root = binaryTree.GetRoot();

    std::cout << "POSTORDER: ";
    binaryTree.Postorder(root);
    std::cout << "\r\n";
}

void PrintBinaryTree(BinaryTree<int32_t> &binaryTree)
{
    Inorder(binaryTree);
    Preorder(binaryTree);
    Postorder(binaryTree);
    BFS(binaryTree);
}

int main()
{
    BinaryTree<int32_t> binaryTree(10);
    FillBinaryTree(binaryTree);
    PrintBinaryTree(binaryTree);
}
