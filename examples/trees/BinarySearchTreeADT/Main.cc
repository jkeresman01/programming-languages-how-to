#include <iostream>

#include "BST.h"

void FillBST(BST<int32_t> &bst)
{
    int32_t keys[] { 23, 12, 31, 3, 15, 7, 29, 88, 53 };

    for(const auto &key : keys)
    {
        bst.Insert(key);
    }
}

void PrintInorder(const BST<int32_t> &bst)
{
    std::cout << "INORDER: ";
    bst.PrintInorder();
    std::cout << "\r\n";
}

void PrintPostorder(const BST<int32_t> &bst)
{
    std::cout << "POSTORDER: ";
    bst.PrintPostorder();
    std::cout << "\r\n";
}

void PrintPreorder(const BST<int32_t> &bst)
{
    std::cout << "PREORDER: ";
    bst.PrintPreorder();
    std::cout << "\r\n";
}

void PrintBFS(const BST<int32_t> &bst)
{
    std::cout << "BFS: ";
    bst.BFS();
    std::cout << "\r\n";
}

void PrintBST(const BST<int32_t> &bst)
{
   PrintInorder(bst);
   /* PrintPreorder(bst); */
   /* PrintPostorder(bst); */
   /* PrintBFS(bst); */
}

int main()
{
    BST<int32_t> bst;

    FillBST(bst);
    PrintBST(bst);
}
