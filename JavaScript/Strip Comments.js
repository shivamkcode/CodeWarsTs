// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
  return text
    .split("\n")
    .map((line) => {
      let mi;

      return line
        .split("")
        .map((e, i) => {
          if (markers.includes(e)) {
            mi = i;
            return "";
          } else if (mi >= 0 && i > mi) {
            return "";
          } else {
            return e;
          }
        })
        .join("")
        .trimEnd();
    })
    .join("\n");
}

function solution(input, markers) {
    return input.split('\n')
      .map(str => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
      .join('\n');
  }
