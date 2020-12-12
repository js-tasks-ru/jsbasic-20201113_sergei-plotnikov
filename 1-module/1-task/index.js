/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;
  if(n == 0 || n == 1) {
    return result;
  }

  result = n;
  for (let index = n - 1; index > 0; index--) {
    result *= n - index;
  }

  return result;
}
