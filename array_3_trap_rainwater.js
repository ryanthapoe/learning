function trap_rainwater(arr) {
  let total = 0,
    maxR = 0,
    maxL = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let l = i - 1; l >= 0; l--) {
      arr[l] > maxL ? (maxL = arr[l]) : (maxL = maxL);
    }
    for (let r = i + 1; r < arr.length; r++) {
      arr[r] > maxR ? (maxR = arr[r]) : (maxR = maxR);
    }
    console.log({ maxL, maxR });
    const currentWater = Math.min(maxL, maxR) - arr[i];
    currentWater > 0 ? (total += currentWater) : null;
    maxR = 0;
    maxL = 0;
    console.log({ total });
  }

  return total;
}

const testOne = [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1];
const testTwo = [0];
const testThree = [];
const testFour = [4, 8, 4];
const testFive = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];
console.log(trap_rainwater(testOne));
// console.log(trap_rainwater(testTwo));
// console.log(trap_rainwater(testThree));
// console.log(trap_rainwater(testFour));
console.log(trap_rainwater(testFive));
