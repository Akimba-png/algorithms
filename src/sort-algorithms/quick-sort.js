let count = 0;
const array = [ 2, 5, 1, 4, 3, 7, 6, 10, 0, 9, 1 ];

function quickSort(arr) {
  if (arr.length <= 1) { return arr; }

  const smallerValues = [];
  const equalValues = [];
  const greaterValues = [];
  const pivotIndex = Math.floor((arr.length - 1) / 2);

  for (let i = 0; i < arr.length; i++) {
    count++;
    if (arr[i] < arr[pivotIndex]) { smallerValues.push(arr[i]) }
    if (arr[i] === arr[pivotIndex]) { equalValues.push(arr[i]) }
    if (arr[i] > arr[pivotIndex]) { greaterValues.push(arr[i]) }
  }

  return [ ...quickSort(smallerValues), ... equalValues, ...quickSort(greaterValues) ];

}

const result = quickSort(array);
console.log('result:', result);
console.log('count:', count);
