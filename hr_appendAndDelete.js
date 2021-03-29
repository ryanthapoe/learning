function appendAndDelete(s, t, k) {
  let commonLength = 0;
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s.charAt(i) === t.charAt(i)) {
      commonLength++;
    } else {
      break;
    }
  }

  if (s.length + t.length - 2 * commonLength > k) {
    return "No";
  } else if ((s.length + t.length - 2 * commonLength) % 2 === k % 2) {
    return "Yes";
  } else if (s.length + t.length - k < 0) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(appendAndDelete("zzzzz", "zzzzzzz", 4));
