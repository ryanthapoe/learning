function getResult(n, m, relations) {
  const fb = {};
  let bukanTeman = 0;
  for (let i = 0; i < m; i++) {
    fb[relations[i][0]] = relations[i][1];
  }
  let teman = [];
  // console.log(fb)
  for (let i = 0; i < n; i++) {
    let current = i;
    const temp = [];
    while (current !== undefined) {
      temp.push(current);
      current = fb[current];
    }
    // console.log(temp)
    if (teman.length < temp.length && temp.includes(0)) teman = temp;
  }
  // console.log(teman)
  for (let i = 0; i < n; i++) {
    if (!teman.includes(i)) bukanTeman++;
  }
  return bukanTeman;
}

console.log(
  getResult(7, 4, [
    [0, 3],
    [5, 0],
    [3, 2],
    [2, 6],
  ])
);
