// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function (array) {
  let result = [];

  while (array.length) {
    // Take the first row
    result = result.concat(array.shift());

    // Take the last element of each remaining row
    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Take the last row in reverse order
    if (array.length) {
      result = result.concat(array.pop().reverse());
    }

    // Take the first element of each remaining row (in reverse order)
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
};

function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map((row) => vector.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return vector;
}

function snail(m) {
    if (m.length === 1) return m[0];
    let transpose = m => m[0].map((_, i) => m.map(r => r[i])), rotate = m => transpose(m).reverse();
    return m[0].concat(snail(rotate(m.slice(1))));
  }