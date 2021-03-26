function minimumSwaps(arr) {
  let swapCount = 0,
    j = 1;

  for (let i = 0; i < arr.length; i++) {
    const fixIndex = arr[i] - 1;
    const term = i - fixIndex === 0;
    if (!term) {
      const temp = arr[fixIndex];
      arr[fixIndex] = arr[i];
      arr[i] = temp;
      i--;
      j--;
      swapCount++;
    }
    j++;
  }

  return swapCount;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]));
