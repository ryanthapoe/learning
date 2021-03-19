// Constrain = array alaways sorted number

function mergeSortedArrays(arr1, arr2) {
  let pointer1 = 0,
    pointer2 = 0;
  const result = [];
  while (arr1[pointer1] || arr2[pointer2]) {
    if (!arr2[pointer2] || arr1[pointer1] <= arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
    console.log({ arr1: arr1[pointer1], arr2: arr2[pointer2] });
  }
  return result;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(
  mergeSortedArrays([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], [1, 3, 5, 7, 9])
);
console.log(1 <= undefined);
