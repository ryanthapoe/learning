function trap_rainwater(arr) {
  // brute force version //
  // let total = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   let maxR = 0,
  //     maxL = 0,
  //     l = i - 1,
  //     r = i + 1;

  //   while (l >= 0) {
  //     maxL = Math.max(maxL, arr[l]);
  //     l--;
  //   }

  //   while (r < arr.length) {
  //     maxR = Math.max(maxR, arr[r]);
  //     r++;
  //   }

  //   console.log({ maxL, maxR });
  //   const currentWater = Math.min(maxL, maxR) - arr[i];
  //   currentWater > 0 ? (total += currentWater) : null;
  //   console.log({ total });
  // }

  // return total;

  // optimize version //
  let total = 0,
    pl = 0,
    pr = arr.length - 1,
    maxL = arr[pl],
    maxR = arr[pr];

  while (pl < pr) {
    if (arr[pl] <= arr[pr]) {
      if (maxL > arr[pl]) total += maxL - arr[pl];
      maxL = Math.max(maxL, arr[pl]);
      pl++;
    } else {
      if (maxR > arr[pr]) total += maxR - arr[pr];
      maxR = Math.max(maxR, arr[pr]);
      pr--;
    }
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
