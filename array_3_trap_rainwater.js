function trap_rainwater(arr) {
  let max_rainwater = 0,
    temp_block = [],
    currentBlock = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentBlock || i === arr.length - 1) {
      const blok_terpendek = Math.min(currentBlock, arr[i]);
      let temp_rainwater;
      temp_block.length > 0
        ? (temp_rainwater = temp_block.reduce(
            (a, b) => a + (blok_terpendek - b)
          ))
        : (temp_rainwater = 0);
      max_rainwater = Math.max(max_rainwater, temp_rainwater);
      temp_block = [];
      currentBlock = arr[i];
    } else {
      temp_block.push(arr[i]);
    }
  }
  return max_rainwater;
}

const testOne = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const testTwo = [0];
const testThree = [];
const testFour = [4, 8, 4];
const testFive = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log(trap_rainwater(testOne));
console.log(trap_rainwater(testTwo));
console.log(trap_rainwater(testThree));
console.log(trap_rainwater(testFour));
console.log(trap_rainwater(testFive));
