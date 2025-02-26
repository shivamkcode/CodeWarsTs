// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  const hash = (s) =>
    "#" +
    s
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  return str.trim().length > 0 && hash(str).length <= 140 ? hash(str) : false;
}

function generateHashtag(str) {
  var hash = "#";
  str.split(" ").map((a) => {
    hash += a.charAt(0).toUpperCase() + a.slice(1);
  });
  return hash != "#" && hash.length <= 140 ? hash : false;
}
