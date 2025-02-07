// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n) {
  let arr = String(n).split("");
  let i = arr.length - 1;

  while (i > 0 && arr[i] <= arr[i - 1]) {
    i--;
  }

  if (i === 0) {
    return -1;
  }

  let j = arr.length - 1;
  while (arr[j] <= arr[i - 1]) {
    j--;
  }

  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

  let left = i;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return Number(arr.join(""));
}

function nextBigger(n) {
  var n2 = n;
  if (parseInt(n2.toString().split("").sort().reverse().join("")) === n)
    return -1;
  while (true) {
    n2 += 9;
    if (
      n2.toString().split("").sort().join("") ===
      n.toString().split("").sort().join("")
    )
      return n2;
  }
}
