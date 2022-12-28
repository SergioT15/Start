//1

// 1. Функция. Принимает массив строк.
//  Должна вернуть массив результатов проверки двух строк.
//  Если у одной строки с последующей первый и последний символы, то true.
//  Например ["asd", "afffd", "cc", "kk"].
//  Для такого массива функция должна вернуть [true, false, false]

// let array = ["asd", "afffd", "cc", "kk"];

// function characterComparison(array) {
//   return array
//     .map(
//       (item, i, arr) =>
//         arr[i + 1] &&
//         item[0] === arr[i + 1][0] &&
//         item[item.length - 1] === arr[i + 1][arr[i + 1].length - 1]
//     )
//     .slice(0, -1);
// }

// console.log(characterComparison(array));


//2

// 2. Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию.
// Встроенный метод массивов flat использовать нельзя.
// Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let array2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];


// const finalArr = [];

// function unpackArr(arr){
//     for(let i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])){
//             unpackArr(arr[i]);
//         } else {
//           finalArr.push(arr[i]);
//         }
//     }
//     return finalArr;
// }

// console.log(unpackArr(array2));



//3

// 3. На вход приниаем массив целых чисел, который должен быть преобразован по следующим правилам:
// - если последвательность составляет диапазон из последовательных целых чисел (как минимум 3 числа): '1, 2, 3, 4' = '1 - 4',
// - в остальных случая числа разделены запятой
// Example:
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

// let arr3 = [
//   -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20
// ];

// function makeRange(arr) {
//   arr.push(undefined);
//   const finalArr = [];
//   let intermediateArr = [];

//   function mergeArr() {
//     let arrToMerge = intermediateArr;

//     if (intermediateArr.length >= 3) {
//       const firstValue = intermediateArr[0];
//       const lastValue = intermediateArr[intermediateArr.length - 1];
//       arrToMerge = [`${firstValue}-${lastValue}`];
//     }
//     finalArr.push(...arrToMerge);
//     intermediateArr = [];
//   }

//   for (const value of arr) {
//     const lastValue = intermediateArr[intermediateArr.length - 1];
//     if (lastValue === undefined || value === lastValue + 1) {
//       intermediateArr.push(value);
//     } else {
//       mergeArr();
//       intermediateArr = [value];
//     }
//   }

//   return finalArr.join(", ");
// }
// console.log(makeRange(arr3));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////











// for (item of array3){

//   let same = []
//   if (array3[i + 1] - item === 1) {
//     same.push;
//     console.log(same);
//   }
// }

// function characterComparison(array) {
//   return array
//     .map(
//       (item, i, arr) =>
//         arr[i + 1] &&
//         item[0] === arr[i + 1][0] &&
//         item[item.length - 1] === arr[i + 1][arr[i + 1].length - 1]
//     )
//     .slice(0, -1);
// }

//  array3.reduce((item, i, arr) => {
//   let same = [];
//   if (arr[i + 1] - item === 1) {
//     same.push;
//   }
//   return same;
// });

// console.log();
