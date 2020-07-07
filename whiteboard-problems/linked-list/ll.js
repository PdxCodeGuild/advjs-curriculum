// A linked list is sort of like a mix between a tree and an array.
// It is similar to a tree in that it is a linked structure, containing "nodes" and "links" between them.
// It is similar to an array in that it is a sequential list of items.
// Being that it is a linked structure, to access a random node, you must traverse the list one item at a time to find what you are looking for.
// This is unlike an array where you have a "constant time" random access of items (by indexing the array).
// However, with a linked list you can insert and remove nodes arbitrarily without the overhead of reallocating memory or moving items around.
//
// Consider that arrays are made of contiguous blocks of memory. This means if an item is inserted or removed, the other items may have to be shifted over.
// The closer to the start of the array that an item is inserted/removed, the more "shifting" will probably have to happen.
//
// Additionally, once an array reaches a certain size, if more items are to be added, a new and larger block of memory will need to be allocated for the array.
// This is so that the array can continue to have "contiguous" elements. Thus the array will have to be "moved" over to this new location.
//
// Linked lists avoid these problems at the cost of sacrificing the contant time random access.
//
// General time complexity of operations:
// 
// Arbitrary location insert/removal worst case:
//    Linked list: O(1)
//    Array: O(n)
//
// Random element access worst case:
//    Linked list: O(n)
//    Array: O(1)
//
// 
// Many languages use linked lists as the default list data structure instead of arrays.
// 
// Languages that use linked lists as the default list structure:
//    SML, Haskell, Ocaml, Clojure (and basically all lisp dialects)...
//
// Languages that use arrays as the default list structure:
//    Python, Javascript, C/C++, Java, (most mainstream languages)...
//
//
// Linked lists are similar to trees in that they are made up of nodes that link between each other.
// The major difference is a linked list doesn't branch out the way a tree does.
// Instead, each node only has one "next" item that it points to.
//
// In javascript, we can represent a node like this:
// { value: x, next: restOfList }
//
// Where each node has a value property that holds a value (such as a number or a string), and a "next" property that points to another node.
// Thus we get a sort of chain-link structure.

 
// To add an item to a list, most languages have a function or operator called "cons".
// Think of this like "push", except for it adds the element to the front instead of the back.

// adds the element x to the list xs
function cons (x, xs) {
  const node = {
    value: x,
    next: xs
  }

  return node
}

// now lets build up a list that looks like this: 1 -> 2 -> 3 -> 4
const list = cons(1, cons(2, cons(3, cons(4))))

// lets make a function for printing the list, one item at a time
function printList (xs) {
  
}

printList(list) // should log out 1, 2, 3, 4 separated by newlines

