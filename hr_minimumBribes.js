function minimumBribes(q) {
  // /* BRUTE FORCE */

  // const arr = q;
  // let bribe = 0;
  // let bribes = 0;
  // let currentPerson;
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       if (currentPerson === arr[i]) {
  //         bribe++;
  //         if (bribe >= 3) return "Too Chaotic";
  //         bribes++;
  //       } else {
  //         currentPerson = arr[i];
  //         bribe = 1;
  //         bribes++;
  //       }
  //     }
  //     console.log({ i, j, currentPerson, bribe, bribes });
  //   }
  // }
  // return bribes;

  // /* OPTIMIZED VERSION */
  let bribes = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) > 2) {
      console.log("Too chaotic");
      return;
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) bribes++;
      // console.log({j:q[j], i: q[i], bribes})
    }
    // console.log({val:q[i], bribes})
  }
  console.log(bribes);
}

// minimumBribes([2, 1, 5, 3, 4]);
// minimumBribes([2, 5, 1, 3, 4]);

// minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

// minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]);
