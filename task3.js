//3

// 3. На вход приниаем массив целых чисел, который должен быть преобразован по следующим правилам:
// - если последвательность составляет диапазон из последовательных целых чисел (как минимум 3 числа): '1, 2, 3, 4' = '1 - 4',
// - в остальных случая числа разделены запятой
// Example:
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

const arr3 = [
  -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
];

function makeRange(arr) {
  const finalArr = [];
  let intermediateArr = [];

  function mergeArr() {
    let arrToMerge = intermediateArr;

    if (intermediateArr.length >= 3) {
      const firstValue = intermediateArr[0];
      const lastValue = intermediateArr[intermediateArr.length - 1];
      arrToMerge = [`${firstValue}-${lastValue}`];
    }
    finalArr.push(...arrToMerge);
    intermediateArr = [];
  }

  for (let value of arr) {
    const lastValue = intermediateArr[intermediateArr.length - 1];
    if (lastValue === undefined || value === lastValue + 1) {
      intermediateArr.push(value);
    } else {
      mergeArr();
      intermediateArr = [value];
    }
  }

  mergeArr();
  return finalArr.join(", ");
}
console.log(makeRange(arr3));
