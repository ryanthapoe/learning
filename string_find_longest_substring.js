// Find The longest substring without repetetion

// find substring that contiginous
// assume all input lowercase

// function findLongestSubstring(str) {
//   let max = 0;
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     count++;
//     if (str[i] === str[i + 1] || str[i + 1] === undefined) {
//       if (count > max) max = count;
//       count = 0;
//     }
//   }
//   return max;
// }

// function findLongestSubstring(str) {
//   let map = {};
//   let max = 0;
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if(!map[str[i]] && i !== str.length-1) {
//       map[str[i]] = 1
//       count++;
//     } else {
//       map = {};
//       if(count > max) max = count;
//       count = 0;
//     }
//   }
//   return max;
// }

// function findLongestSubstring(str) {
//   let max = 0;
//   for (let i = 0; i < str.length; i++) {
//     let map = {};
//     let count = 0;
//     for (let j = 0; j < str.length; j++) {
//       const current = str[j];
//       if(!map[current]){
//         count++;
//         map[current] = true;
//         max = Math.max(max, count);
//       } else {
//         break;
//       }
//     }
//   }
//   return max;
// }

// function findLongestSubstring(str) {
//   let max = 0, count = 0;
//   let p1 = 0, p2 = 0;
//   let map = {}
//   // while(p1 <= str.length){
//     if(!map[str[p2]]){
//       map[str[p2]] = true;
//       count++;
//       max = Math.max(max, count);
//       p2++;
//     } else{
//       p1++;
//     }
//   }
//   return max;
// }

console.log(findLongestSubstring("abca"));
console.log(findLongestSubstring("abcdefghijkkkcbaabcdefghijklmnopqr"));
