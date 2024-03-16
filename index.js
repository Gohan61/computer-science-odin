function fibs(num) {
  const fibsArray = [0, 1];
  for (let i = 2; i < num; i++) {
    fibsArray[i] = fibsArray[i - 1] + fibsArray[i - 2];
  }
  return fibsArray;
}

function fibsRec(num, fibsArray = [0, 1]) {
  if (fibsArray.length >= num) {
    return fibsArray;
  } else {
    return fibsRec(num, [
      ...fibsArray,
      fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2],
    ]);
  }
}
