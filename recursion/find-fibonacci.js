const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

function findFibonacci(index) {
  if (index === 0 || index === 1) {
    return 1;
  }
  return findFibonacci(index - 2) + findFibonacci(index - 1);
}

const result = findFibonacci(7);
console.log(result);
