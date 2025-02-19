//     Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  // First find where the numbers start (if any)
  let numberStart = str.length;
  for (let i = str.length - 1; i >= 0; i--) {
    if (isNaN(str[i])) {
      break;
    }
    numberStart = i;
  }

  // If no numbers found, just append '1'
  if (numberStart === str.length) {
    return str + "1";
  }

  // Split into text and number portions
  const textPart = str.slice(0, numberStart);
  const numberPart = str.slice(numberStart);

  // Get the length of number part for padding
  const numberLength = numberPart.length;

  // Convert to number and increment
  const incremented = (parseInt(numberPart) + 1).toString();

  // Add leading zeros if needed to maintain same length
  let result = incremented;
  while (result.length < numberLength) {
    result = "0" + result;
  }

  return textPart + result;
}

// This solution uses a regex pattern to match and increment numbers at the end of the string
// /[0-8]?9*$/ breaks down as:
//   [0-8]? - optionally matches a single digit from 0-8
//   9* - matches zero or more 9s
//   $ - matches the end of the string
// Examples:
//   "foo" -> matches "" -> increments to "1"
//   "foo9" -> matches "9" -> increments to "10" 
//   "foo19" -> matches "19" -> increments to "20"
//   "foo099" -> matches "099" -> increments to "100"
const incrementString = (strng) => strng.replace(/[0-8]?9*$/, (val) => ++val);
