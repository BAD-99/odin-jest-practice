const calculator = (function () {
  const add = (a, b) => {
    return a+b;
  };
  const sub = (a, b) => {
    return a-b;
  };
  const mul = (a, b) => {
    return a*b;
  };
  const div = (a, b) => {
    return a/b;
  };
  return { add, sub, mul, div };
})();

export default calculator;
