import analyzeArray from "../scripts/analyzeArray";

/*
{ 
    average: null, 
    min: null, 
    max: null, 
    length: null 
}
*/
test("Returns object", () =>
  expect(analyzeArray()).toEqual({
    average: null,
    min: null,
    max: null,
    length: null,
  }));
test("Returns object", () =>
  expect(analyzeArray([])).toMatchObject({
    average: null,
    min: null,
    max: null,
    length: 0,
  }));
test("Returns object", () =>
  expect(analyzeArray([1])).toMatchObject({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  }));
test("Returns object", () =>
  expect(analyzeArray([1, 2, 3])).toMatchObject({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  }));
test("Returns object", () =>
  expect(analyzeArray([50, 75, 100, 125, 150])).toMatchObject({
    average: 100,
    min: 50,
    max: 150,
    length: 5,
 }));
