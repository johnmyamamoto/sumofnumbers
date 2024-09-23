const testArray: number[] = [1, 4, 7, 4, 8];

function sumFor(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumFor(testArray));

function sumWhile(arr: number[]) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testArray));

function sumRecursion(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + sumRecursion(arr.slice(1));
}

console.log(sumRecursion(testArray));

function sumTheFunctionalWay(arr: number[]) {
  let sum = 0;
  arr.forEach((item) => sum += item);
  return sum;
}

console.log(sumTheFunctionalWay(testArray));
