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

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

function mergeSort(array) {
  const middle = array.length / 2;

  if (array.length <= 1) {
    return array
  }

  const left = array.splice(0, middle)
  const right = array
  return merge(mergeSort(left), mergeSort(right))
}

