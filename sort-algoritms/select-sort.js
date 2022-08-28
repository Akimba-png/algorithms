let count = 0;
const array = [ 2, 3, 1, 4, 5, 7, 6, 10, 0, 9 ];

function selectSort(array) {
  const arr = array.slice();
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

const result = selectSort(array);
console.log('result:', result);
console.log('count:', count);
