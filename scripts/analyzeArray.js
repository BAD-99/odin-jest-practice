export default function analyzeArray(arr) {
  let length;
  if (!arr) {
    length = null;
  } else {
    length = arr.length;
  }
  let average = null;
  let min = null;
  let max = null;
  if (length) {
    average = arr[0];
    min = arr[0];
    max = arr[0];
  }
  for (let i = 1; i < length; i++) {
    average += arr[i];
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  if (length) {
    average /= length;
  }
  return {
    average,
    min,
    max,
    length,
  };
}
