// Всі функції повинні бути описані стрілочним типом!!!!
//     1.- створити функцію яка обчислює та повертає площу прямокутника
console.log(`Task 1`);
let areaOfRectangle = (h, l) => h*l;
console.log(areaOfRectangle(23, 34));
// 2.- створити функцію яка обчислює та повертає площу кола
console.log(`Task 1`);
let circleArea = (r) => 3.14 * r ** 2;
console.log(circleArea(5));
// 3.- створити функцію яка обчислює та повертає площу циліндру
console.log(`Task 3`);
let cylinderArea = (r, h) => 2 * 3.14 * r ** 2 + 2 * 3.14 * r * h;
console.log(cylinderArea(5, 12));
// 4.- створити функцію яка приймає масив та виводить кожен його елемент
console.log(`Task 4`);
let arrayIteration = (arr) => {for (let temp of arr) {console.log(temp);}};
let arr1 = [23, 'ewrewr', true, 2323, {name: 'Vasyl', age: 23, hobby: 'travelling'}, 234];
arrayIteration(arr1);
// 5.- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
document.write(`Task 5`);
let someText = (text) => document.write(`<p>${text}</p>`);
someText('В полях, де тиша й самота німа, обкурений поволі я блукаю і тільки тих стежок не оминаю, де й людської ноги нема... (за митивом Шекспіра)');
// 6.- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`Task 6`);
let ulCreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
ulCreator('Hello!!!');

// 7.- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
console.log(`Task 7`);
document.write(`Task 7`);

let ulCreator2 = (text, n) => {
    document.write(`<ul>`);
    for (let i = 0; i <= n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`<ul>`);
}
ulCreator2('The new item', 12);
// 8.- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log(`Task 8`);
let fooArrIterator = (arr) => {
    for (let temp of arr) {
        console.log(temp);
    }
}

fooArrIterator ([23, 45, true, 'Kolya', false, 34, 234, 678]);
// 9. - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let person = (id, name, age) => {
    document.write(`<div style="width: 250px; padding: 5px; border: 1px solid aqua; margin: 5px; box-sizing: border-box; color: red">`);
    document.write(`id: ${id}, name: ${name}, age: ${age}`);
    document.write(`</div>`);
}
person(1, 'Petro', 23);
person(2, 'Roman', 32);
person(3, 'Vladyk', 21);
person(4, 'Ohrim', 11);
