// Sum 2 integer

function sumTwo(arr, targetSum) {
  if (arr.length < 2) return null;
  // With two pointer
  // One pointer keep the first value
  // Another pointer find the second value
  // for (let i = 0; i < arr.length; i++) {
  //   const numberToFind = targetSum - arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] === numberToFind) return [i, j];-
  //   }
  //   // if (anotherValue) return [i, anotherValue];
  // }
  // Using hash table

  const numberToFind = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = numberToFind[arr[i]];

    if (currentNumber >= 0) {
      return [currentNumber, i];
    } else {
      const target = targetSum - arr[i];
      numberToFind[target] = i;
    }
  }
  // if no index sum up to target return null
  return null;
}

console.log(sumTwo([1, 3, 7, 9, 2], 11));
console.log(sumTwo([1, 2, 4, 16, 20], 20));
console.log(sumTwo([1], 20));
console.log(sumTwo([], 20));
console.log(sumTwo([15, 5], 20));
