function sum(num) {
  console.log('sum was called');
  return num + 1;
}

function memorise(fn) {
  const storage = new Map();
  return (num) => {
    if (storage.has(num)) {
      return storage.get(num);
    }
    const value = fn(num);
    storage.set(num, value);
    return value;
  }
}

const memorisedSum = memorise(sum);
console.log(memorisedSum(2));
console.log(memorisedSum(2));
console.log(memorisedSum(5));
console.log(memorisedSum(2));
