let count = 0;
const array = [ 0, 1, 3, 4, 5, 7, 8, 9, 10, 12 ];

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    count++;
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) { return middle }
    if (target < arr[middle]) { end = middle - 1 }
    if (target > arr[middle]) { start = middle + 1 }
  }
  return -1;
}

const result = binarySearch(array, 12);
console.log('result:', result);
console.log('count:', count);
