// Complete the isValid function below.
function isValid(s) {
  const map = {};
  let min = s.length,
    pMin,
    max = 0,
    countMax = 0,
    countMin = 0,
    counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
    if (pMin === s[i]) {
      min++;
    }
    if (map[s[i]] < min) {
      min = map[s[i]];
      pMin = s[i];
    }
    if (max < map[s[i]]) {
      max = map[s[i]];
    }
  }
  const keys = Object.keys(map);

  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === max) countMax++;
    if (map[keys[i]] === min) countMin++;
  }
  console.log({ max, min, countMax, countMin });
  if (max === min) {
    return "YES";
  } else if (max - min > 1) {
    if (countMax + countMin === keys.length) {
      if (min === 1 && countMin === 1) return "YES";
    }
    return "NO";
  } else {
    if (countMax > countMin) {
      if (countMin === 1) {
        return "YES";
      } else {
        return "NO";
      }
    } else if (countMin > countMax) {
      if (countMax === 1) {
        return "YES";
      } else {
        return "NO";
      }
    } else if (countMin === countMax) {
      if (countMax === 1) {
        return "YES";
      } else {
        return "NO";
      }
    }
  }
}

// console.log(isValid("aabbc"))

console.log(isValid("abbccc"));
