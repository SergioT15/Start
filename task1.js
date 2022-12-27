
//1

// 1. Функция. Принимает массив строк.
//  Должна вернуть массив результатов проверки двух строк.
//  Если у одной строки с последующей первый и последний символы, то true.
//  Например ["asd", "afffd", "cc", "kk"].
//  Для такого массива функция должна вернуть [true, false, false]

let array1 = ["asd", "afffd", "cc", "kk"];

function characterComparison(array) {
  return array
    .map(
      (item, i, arr) =>
        arr[i + 1] &&
        item[0] === arr[i + 1][0] &&
        item[item.length - 1] === arr[i + 1][arr[i + 1].length - 1]
    )
    .slice(0, -1);
}

console.log(characterComparison(array1));
