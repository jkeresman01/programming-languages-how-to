#include <iostream>

#include "Node.h"

void print(const Node<int32_t> * node)
{
    while(node != NULL)
    {
        std::cout << node->Value << " -> ";
        node = node->Next;
    }

    std::cout << "NULL" << "\r\n";
}

int main()
{
    /* |------|------|                                              */
    /* |  7   | NULL |                                              */
    /* |______|______|                                              */
    Node<int32_t> * node1 = new Node<int32_t>(7);

    /* |------|------|     |--------|-------|                       */
    /* |  7   |  -|--|---->|   14   |  NULL |                       */
    /* |______|______|     |________|_______|                       */
    Node<int32_t> * node2 = new Node<int32_t>(14);
    node1->Next = node2;

    /* |------|------|     |--------|-------|     |--------|-------| */
    /* |  7   |  -|--|---->|   14   |   -|--|---->|   21   |  NULL | */
    /* |______|______|     |________|_______|     |________|_______| */
    Node<int32_t> * node3 = new Node<int32_t>(21);
    node2->Next = node3;

    print(node1);

    delete node1;
    delete node2;
    delete node3;
}
