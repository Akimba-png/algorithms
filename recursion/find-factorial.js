function findFactorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * findFactorial(n - 1);
}

const result = findFactorial(5);
console.log(result);
