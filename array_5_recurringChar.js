// given an array of numbers, return the first repeated value;

const recurringChar = (arr) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) return arr[i];
    map[arr[i]] = 1;
  }
  return undefined;
};

console.log(recurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(recurringChar([2, 3, 4, 5]));
console.log(recurringChar([2]));
console.log(recurringChar([]));
