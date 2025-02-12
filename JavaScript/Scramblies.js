// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const countChars = (str) => {
    return str.split("").reduce((count, char) => {
      count[char] = (count[char] || 0) + 1;
      return count;
    }, {});
  };

  const str1Counts = countChars(str1);
  const str2Counts = countChars(str2);

  return str2.split("").every((char) => str1Counts[char] >= str2Counts[char]);
}
