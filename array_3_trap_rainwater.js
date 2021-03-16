function trap_rainwater(arr) {
  let max_rainwater = 0,
    temp_rainwater = 0,
    currentBlock = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > currentBlock || i === arr.length - 1) {
      max_rainwater = Math.max(max_rainwater, temp_rainwater);
      temp_rainwater = 0;
      currentBlock = arr[i];
    } else {
      temp_rainwater += currentBlock - arr[i];
    }
  }

  return max_rainwater;
}

const testOne = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
const testTwo = [0];
const testThree = [];
const TestFour = [4, 8, 4];
console.log(trap_rainwater(testOne));
console.log(trap_rainwater(testTwo));
console.log(trap_rainwater(testThree));
console.log(trap_rainwater(TestFour));
