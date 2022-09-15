const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function fisherYatesSort(array) {
  let temp;
  let randomIndex;
  const arr = array.slice();

  for (let i = arr.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
}

const result = fisherYatesSort(array);
console.log(result);
