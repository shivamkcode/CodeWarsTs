// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

function sumStrings(a, b) {
  var result = "";
  var carry = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || carry) {
    carry += ~~a.pop() + ~~b.pop();
    result = (carry % 10) + result;
    carry = carry > 9;
  }
  return result
    .split("")
    .map((e, i) => (i === 0 && e === "0" ? "" : e))
    .join("");
}

function sumStrings(a, b) {
  return `${BigInt(a) + BigInt(b)}`;
}
