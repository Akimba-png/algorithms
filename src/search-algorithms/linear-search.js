let count = 0;
const array = [ 2, 5, 1, 4, 3, 7, 6, 10, 0, 9 ];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch(array, 10);
console.log('result:', result);
console.log('count:', count);
