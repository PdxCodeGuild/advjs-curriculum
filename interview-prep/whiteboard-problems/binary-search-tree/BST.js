// Binary Search Tree
//
// A binary search tree is a tree that is structured in a way that allows
// it to be binary searched. This means we can search in O(log(n)) time.
//
// To structure a tree in this way, 2 rules must be followed:
// 
// 1) Each node must have no more than 2 children
//    We will call the two children 'left' and 'right'
// 
// 2) If a child value is less than the parent's value, it must be stored
//    in the left branch. If a child value is greater than the parents value,
//    it must be stored in the right branch.
//
// Following these rules will allow us to search the tree in a binary search way.
// This is because we can compare the values and decide which branch to go down,
// halving the search space each time we descend into the tree.


const tree1 = {
  value: 5,
  left: {
    value: 3,
    left: null,
    right: {
      value: 4
    }
  },
  right: {
    value: 8,
    left: {
      value: 7,
      left: {
        value: 6
      }
    },
    right: {
      value: 9
    }
  }
}

// search takes in a tree and a value to search for,
// and returns true or false depending on if the value was found in the tree
function search (tree, value) {

}

console.log(search(tree1, 5)) // true
console.log(search(tree1, 3)) // true
console.log(search(tree1, 4)) // true
console.log(search(tree1, 8)) // true
console.log(search(tree1, 7)) // true
console.log(search(tree1, 6)) // true
console.log(search(tree1, 9)) // true

console.log(search(tree1, 10)) // false
console.log(search(tree1, 1)) // false
console.log(search(tree1, 2)) // false

