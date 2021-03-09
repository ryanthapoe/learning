function findIndex(arr, targetSum) {
  if (arr.length < 2) return null;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === targetSum) {
  //       return [i, j];
  //     }
  //   }
  // }

  // With two pointer
  // One pointer keep the first value
  // Another pointer find the second value
  // for (let i = 0; i < arr.length; i++) {
  //   const numberToFind = targetSum - arr[i];
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[j] === numberToFind) return [i, j];
  //   }
  //   // if (anotherValue) return [i, anotherValue];
  // }

  // Only work for array that has been sorted

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] + arr[arr.length - 1] === targetSum) {
  //     return [i, arr.length - 1];
  //   }
  //   if (arr[i] + arr[arr.length - 1] > targetSum) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[i] + arr[j] === targetSum) {
  //         return [i, j];
  //       }
  //     }
  //   }
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

console.log(findIndex([1, 3, 7, 9, 2], 11));
console.log(findIndex([1, 2, 4, 16, 20], 20));
console.log(findIndex([1], 20));
console.log(findIndex([], 20));
console.log(findIndex([15, 5], 20));
