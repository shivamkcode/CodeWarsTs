//Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

//When positives and positives interact, they remain positive.
//When negatives and negatives interact, they remain negative.
//But when negatives and positives interact, they become neutral, and are shown as the number 0.
//Worked Example

//("+-+", "+--") ➞ "+-0"
//# Compare the first characters of each string, then the next in turn.
//# "+" against a "+" returns another "+".
//# "-" against a "-" returns another "-".
//# "+" against a "-" returns "0".
//# Return the string of characters.
//Examples

//("--++--", "++--++") ➞ "000000"

//("-+-+-+", "-+-+-+") ➞ "-+-+-+"

//("-++-", "-+-+") ➞ "-+00"
//Notes

//The two strings will be the same length.'

function neutralise(s1, s2) {
    // Here be dragons!
    let arr1 = s1.split("")
    let arr2 = s2.split("")
    let arr = ['']
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            arr.push(arr1[i])
        } else {
            arr.push('0')
        }
    }
    return arr.join('')
}