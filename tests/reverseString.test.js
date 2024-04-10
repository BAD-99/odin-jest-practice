import reverseSting from "../scripts/reverseString";

test("Reverses string(1)", () => {
  expect(reverseSting("Reverse me")).toBe("em esreveR");
});

test("Reverses string(2)", () => {
    expect(reverseSting("Race car")).toBe("rac ecaR");
  });

  test("Reverses string with numbers", () => {
    expect(reverseSting("03302023")).toBe("32020330");
  });
  
  