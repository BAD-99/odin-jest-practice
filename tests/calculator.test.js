import calculator from "../scripts/calculator";

test("Add 2+3", () => expect(calculator.add(2, 3)).toBe(5));
test("Add 12+5", () => expect(calculator.add(12, 5)).toBe(17));
test("Subtract 10-1", () => expect(calculator.sub(10, 1)).toBe(9));
test("Subtract 2-8", () => expect(calculator.sub(2, 8)).toBe(-6));
test("Divide 10/4", () => expect(calculator.div(10, 4)).toBeCloseTo(2.5));
test("Divide 20/-10", () => expect(calculator.div(20, -10)).toBe(-2));
test("Multiply 4*3", () => expect(calculator.mul(4, 3)).toBe(12));
test("Multiply 0.2*-2", () =>
  expect(calculator.mul(0.2, -2)).toBeCloseTo(-0.4));
