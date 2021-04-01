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

console.log(compareString("", ""));
console.log(compareString("te#t", "teaa###t"));
