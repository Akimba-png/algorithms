const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function randomSort(array) {
  const arr = array.slice();
  return arr.sort(() => Math.random() - 0.5);
}

const result = randomSort(array);
console.log(result);
