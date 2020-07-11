// Binary Search

// When a linear search, aka O(n), is too slow, it may be possible to search faster by using a technique called "binary search".
// It only works if your data is sorted!

// Think about looking up a word in a dictionary...
// You open the book somewhere in the middle, and you look at the words on the page.
// If your word comes before, you take the left half of the book and repeat the process (open to halfway, check the words, etc.)
// If your word comes after, you take the right half of the book and repeat...

// The end result is you don't have to linearly scan every single word. You are effectively halving the search space each time.
// You take half, then take half of that, then half of that, etc. until you find what you are looking for.

// The big-o notation for this would be O(log(n))
// where log means the logarithm of n. Think of log(n) as the opposite of 2^n.
// Where 2^n means the algoritm doubles for every number you add to n (1, 2, 4, 8, 16, 32, 64, 128...)
// log(n) grows much more slowly: (1, 1.58, 2, 2.32, 2.58, 2.80, 3, 3.17...)

// As an example: Consider an input size of 100
// log(n) -  6.64
// n      -  100
// n^2    -  10000
// 2^n    -  1267650600228229401496703205376

// write a function that searches for an element in the array using a linear search
// It should return the index of the target element

function linearSearch (list, target) {

}

// now assume the list is ordered, and write a function that performs a binary search

function binarySearch (sortedList, target) {

}

console.log(linearSearch([2, 3, 1, 5, 8, 9], 5)) // -> 3

console.log(binarySearch([1, 4, 7, 8, 11, 14], 11)) // -> 4
console.log(binarySearch([1, 4, 7, 8, 11, 14], 10)) // -> 4
console.log(binarySearch([1, 4, 7, 8, 11, 14], 1)) // -> 4
console.log(binarySearch([1, 4, 7, 8, 11, 14], 14)) // -> 4
console.log(binarySearch([1, 4, 7, 8, 11, 13, 14], 14)) // -> 4
