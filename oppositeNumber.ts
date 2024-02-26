// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

export class Kata {
  static opposite(n: number) {
    return n > 0 ? -n : n + (-2 * n);
  }
}

// export class Kata {
//     static opposite(n: number) {
//       return -n 
//     }
//   }

// export class Kata {
//     static opposite(n: number) {
//       return n-n-n;
//     }
//   }

