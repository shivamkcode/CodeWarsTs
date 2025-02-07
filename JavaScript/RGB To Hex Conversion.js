// Description:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  const div = (x) => {
    if (x < 0) {
      return `00`;
    }
    if (x > 255) {
      return "FF";
    }
    let num = String((x / 16).toFixed(2)).split(".");
    let num1 = Number(num[0]);
    let num2 = Math.round((num[1] / 100) * 16);
    let code = (y) =>
      y <= 9
        ? y
        : y === 10
        ? "A"
        : y === 11
        ? "B"
        : y === 12
        ? "C"
        : y === 13
        ? "D"
        : y === 14
        ? "E"
        : "F";
    return `${code(num1)}${code(num2)}`;
  };

  return div(r) + div(g) + div(b);
}

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(d) {
  if (d < 0) {
    return "00";
  }
  if (d > 255) {
    return "FF";
  }
  return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
}
