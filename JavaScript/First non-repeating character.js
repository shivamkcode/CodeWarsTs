// Description:
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  return s
    .split("")
    .map((e) =>
      s.toLowerCase().indexOf(e.toLowerCase()) ===
      s.toLowerCase().lastIndexOf(e.toLowerCase())
        ? e
        : ""
    )
    .join("")
    .charAt(0);
}

function firstNonRepeatingLetter(s) {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++)
    if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
  return "";
}
