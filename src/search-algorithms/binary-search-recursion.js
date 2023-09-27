let count = 0;
const array = [ 0, 1, 3, 4, 5, 7, 8, 9, 10, 12 ];

function binarySearch(arr, target) {
  return (function cycle(start, end) {
    count++;
    const middle = Math.floor((start + end) / 2);
    if (target === arr[middle]) { return middle }
    if (target < arr[middle]) { return cycle(start, middle - 1) }
    if (target > arr[middle]) { return cycle(middle + 1, end) }
    return -1;
  })(0, arr.length);
}

// вариант 2 (базовая проверка)
function binarySearch(arr, target) {
  return (function cycle(start, end) {
    if (end < start) { return - 1}
    const middle = Math.floor((start + end) / 2);
    if (target === arr[middle]) { return middle };
    if (target < arr[middle]) { return cycle(start, middle - 1) }
    if (target > arr[middle]) { return cycle(middle + 1, end) }
  })(0, arr.length - 1);
}

const result = binarySearch(array, 9);
console.log('result:', result);
console.log('count:', count);
