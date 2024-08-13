function fibs(num: number): number[] {
  const fibsArray: number[] = [0, 1];
  for (let i = 2; i < num; i++) {
    fibsArray[i] = fibsArray[i - 1] + fibsArray[i - 2];
  }
  return fibsArray;
}

function fibsRec(num: number, fibsArray: number[] = [0, 1]): number[] {
  if (fibsArray.length >= num) {
    return fibsArray;
  } else {
    return fibsRec(num, [
      ...fibsArray,
      fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2],
    ]);
  }
}

function merge(left: number[], right: number[]): number[] {
  let sortedArr: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift()!);
    } else {
      sortedArr.push(right.shift()!);
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(array: number[]): number[] {
  const middle: number = array.length / 2;

  if (array.length <= 1) {
    return array;
  }

  const left: number[] = array.splice(0, middle);
  const right: number[] = array;
  return merge(mergeSort(left), mergeSort(right));
}
