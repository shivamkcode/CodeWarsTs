// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

export class Kata {
  static getCount(str: string): number {
    return str
      .split("")
      .filter(
        (i) => i === "a" || i === "e" || i === "i" || i === "o" || i === "u"
      ).length;
    //   return [...str].filter(char => 'aeiou'.includes(char)).length;
  }
}
const voyelles = ['a', 'e', 'i', 'o', 'u'];

function includeVoyelles(letter: string) {
  return voyelles.indexOf(letter) >= 0;
}

export class Katak {
  static getCount(str: string) {
    return str.split('').filter(includeVoyelles).length;
  }
}

// export class Kata {
//   static getCount(str: string) {
//     let list = str.match(/[aeiou]/gi);
//     return list ? list.length : 0;
//   }
// }
