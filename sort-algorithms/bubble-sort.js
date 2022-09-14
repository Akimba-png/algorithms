let count = 0;
const array = [ 2, 5, 1, 4, 3, 7, 6, 10, 0, 9 ];

function bubbleSort(array) {
  const arr = array.slice();
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      count++;
      if (arr[j + 1] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const result = bubbleSort(array);
console.log('result:', result);
console.log('count:', count);
