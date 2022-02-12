
// 1. створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи -
// складає або конкатенує їх між собою.
console.log(`Task 1`)
function differReactionForNumberOfArg(a, b) {
    if (!!!b && b!==0) {
        console.log(a)
    } else if (!!b) {
        return a + b;
    }
}
differReactionForNumberOfArg(9);
console.log(differReactionForNumberOfArg(3, 12));

// 2. створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами
// та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
console.log(`Task 2`)
function concatElementsOfTwoArrays(arr1, arr2) { //вважаємо, що отримані масиви мають однакову кількість елементів
    let arr3 = [];
    for (let i=0; i < arr1.length; i++) {
        arr3[i] = arr1[i] + arr2[i];
    }
    return arr3;
}
let arr4 = concatElementsOfTwoArrays([23, 34, 45, 23, 67, 87], [3, 56, 87, 345, 54, 65]);
console.log(arr4);

// 3. Створити функцію яка приймає масив будь яких обєктів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
console.log(`Task 3`)

function returnsKeys (arr) {
    let ArrKeys = [];
    for (let item of arr) {
        for (const itemKey in item) {
            ArrKeys.push(itemKey);
        }
    }
    return ArrKeys;
}
let ArrKeys1 = returnsKeys([{name:'Vasya', status: true, price: 20}, {id: 2, surname: 'Ostapchuk'}, {number: 45, country: 'Ukraine'}]);
console.log(ArrKeys1);

// 4. Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE: _ НЕ ЗРОБИВ, БО НЕ ЗМІГ ДОСТУПИТИСЬ ДО ЗНАЧЕНЬ КЛЮЧІВ
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
console.log(`Task 4`)
let ArrKeys5 = [{name:'Vasya', status: true, price: 20}, {id: 2, surname: 'Ostapchuk'}, {number: 45, country: 'Ukraine'}];
// console.log(ArrKeys5[0].);

function returnsValues (arr) {
    let ArrValues = [];
    // for (let item of arr) {
    for (i = 0; i < arr.length; i++) {
        for (const itemKey in arr[i]) {
            // console.log(itemKey);
            // console.log(arr[i][itemKey]);
            ArrValues.push(arr[i][itemKey]);
        }
    }
    return ArrValues;
}
let ArrValues1 = returnsValues([{name:'Vasya', status: true, price: 20}, {id: 2, surname: 'Ostapchuk'}, {number: 45, country: 'Ukraine'}]);
console.log(ArrValues1);
