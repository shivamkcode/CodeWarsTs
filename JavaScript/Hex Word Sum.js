// Description
// As hex values can include letters A through to F, certain English words can be spelled out, such as CAFE, BEEF, or FACADE. This vocabulary can be extended by using numbers to represent other letters, such as 5EAF00D, or DEC0DE5.

// Given a string, your task is to return the decimal sum of all words in the string that can be interpreted as such hex values.

// Example
// Working with the string "BAG OF BEES":

// "BAG"  =  0, as it is not a valid hex value
// "OF"   =  0F   =  15
// "BEES" =  BEE5 =  48869
// So the result is the sum of these: 48884 (0 + 15 + 48869)

// Notes
// Inputs are all uppercase and contain no punctuation
// 0 can be substituted for O
// 5 can be substituted for S

function hexWordSum(string) {
  return string.length === 0
    ? 0
    : string
        .split(" ")
        .map((e) =>
          e
            .split("")
            .filter((l) => "ABCDEFSO".includes(l))
            .join("") === e
            ? parseInt(e.replaceAll("S", 5).replaceAll("O", 0), 16)
            : 0
        )
        .reduce((a, b) => a + b, 0);
}