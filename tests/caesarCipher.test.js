import caesarCipher from "../scripts/caesarCipher";

test("abc 3", () => expect(caesarCipher("abc", 3)).toBe("def"));
test("XYZ 5", () => expect(caesarCipher("XYZ", 5)).toBe("CDE"));
test("Caesar 3", () => expect(caesarCipher("Caesarz", 3)).toBe("Fdhvduc"));
test("This is a test 123 15", () =>
  expect(caesarCipher("This is a test 123", 15)).toBe("Iwxh xh p ithi 123"));
test("124@#*$)09(.451 5", () =>
  expect(caesarCipher("124@#*$)09(.451", 5)).toBe("124@#*$)09(.451"));
