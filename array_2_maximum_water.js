// Find the most water in the container with y height from an array of integer

function findMostWater(arr) {
  if (arr.length <= 1) return 0;

  let maxLuas = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i; j < arr.length; j++) {
  //     const panjang = Math.min(arr[i], arr[j]);
  //     const lebar = j - i;
  //     const luas = panjang * lebar;
  //     if (luas > maxLuas) {
  //       maxLuas = luas;
  //     }
  //   }
  // }

  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    console.log(j, i);
    const panjang = Math.min(arr[i], arr[j]);
    const lebar = j - i;
    const luas = panjang * lebar;
    if (luas > maxLuas) maxLuas = luas;
    console.log(panjang === arr[i]);
    if (arr[i] <= arr[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxLuas;
}

const testArr = [7, 1, 2, 3, 9];
const testArr2 = [6, 9, 3, 4, 5, 8];
const testArr3 = [4, 8, 1, 2, 3, 9];

console.log(findMostWater(testArr));
console.log(findMostWater(testArr2));
console.log(findMostWater(testArr3));
