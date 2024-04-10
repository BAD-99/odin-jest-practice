import capitalize from "../scripts/capitalize";

test("Returns first letter capitalized(1)", () => {
  expect(capitalize("orange")).toBe("Orange");
});
test("Returns first letter capitalized(2)", () => {
  expect(capitalize("banana")).toBe("Banana");
});
test("Ignores numbers", () => {
  expect(capitalize("1234")).toBe("1234");
});
