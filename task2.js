
//2

// 2. Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию.
// Встроенный метод массивов flat использовать нельзя.
// Например: [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const array2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];


const finalArr = [];

function unpack(arr){
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            unpack(arr[i]);
        } else {
          finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

console.log(unpack(array2));
