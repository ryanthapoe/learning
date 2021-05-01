function compareString(s1, s2) {
  const first = deleteAfterHash(s1.split(""));
  const second = deleteAfterHash(s2.split(""));
  if (first.length !== second.length) return false;
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) return false;
  }
  return true;
}

function deleteAfterHash(arr) {
  const data = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "#") {
      data.push(arr[i]);
    } else {
      data.pop();
    }
  }
  return data;
}

function compareStringImproved(s1, s2) {
  let len1 = s1.length - 1;
  let len2 = s2.length - 1;
  let len1skip = 0,
    len2skip = 0;
  while (len1 >= 0 || len2 >= 0) {
    let check = true;
    if (s1[len1] === "#") {
      len1skip++;
      len1--;
      check = false;
    } else {
      len1 -= len1skip;
      len1skip = 0;
    }
    if (s2[len2] === "#") {
      len2skip++;
      len2--;
      check = false;
    } else {
      len2 -= len2skip;
      len2skip = 0;
    }
    if (check) {
      if (s1[len1] === s2[len2]) {
        len1--;
        len2--;
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(compareStringImproved("", ""));
console.log(compareStringImproved("tes#t", "teaaw###t"));
