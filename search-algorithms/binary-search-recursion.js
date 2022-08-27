const array = [ 0, 1, 3, 4, 5, 7, 8, 9, 10, 12, 17 ];

function binarySearch(arr, target) {
  return (function cycle(start, end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) { return middle }
    if (target < arr[middle]) { return cycle(start, middle - 1) }
    if (target > arr[middle]) { return cycle(middle + 1, end) }
    return -1;
  })(0, arr.length);
}

const result = binarySearch(array, 9);
console.log(result);
