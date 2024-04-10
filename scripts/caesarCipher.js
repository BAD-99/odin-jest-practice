export default function caesarCipher(str, shift) {
  if (shift < 0) {
    shift %= 26;
    shift += 26;
  }
  let cipher = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    cipher[i] = shiftCharCode(charCode, shift);
  }
  return String.fromCharCode(...cipher);
}

//caps = 65 A - 90 Z
//low = 97 a - 122 z

function shiftCharCode(num, shift) {
  if (65 <= num && num <= 90) {
    num -= 65;
    num += shift;
    num %= 26;
    num += 65;
  } else if (97 <= num && num <= 122) {
    num -= 97;
    num += shift;
    num %= 26;
    num += 97;
  }
  return num;
}

