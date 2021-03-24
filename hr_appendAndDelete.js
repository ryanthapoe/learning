function appendAndDelete(s, t, k) {
  s = s.split("");
  t = t.split("");
  const temp = s;
  if (s.length === t.length) {
    if (s.length * 2 <= k) return "Yes";
  }
  let j = 0,
    i = 0,
    operation = 0;
  while (i < temp.length && j < t.length) {
    console.log({ i, j });
    if (temp[i] === t[j]) {
      i++;
      j++;
    } else {
      temp.splice(i, 1);
      operation++;
    }
    if (operation > k) return "No";
  }
  if (j === t.length) {
    if (temp.length - i < k) return "Yes";
  }
  while (j < t.length) {
    temp.push(t[j]);
    operation++;
    j++;
    if (operation > k) return "No";
  }
  if (operation === k) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(appendAndDelete("zzzzz", "zzzzzzz", 4));
