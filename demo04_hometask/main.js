// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
console.log(`Task 1`);

function rectangleArea(a, b) {
    return a * b;
}

let rectangleArea1 = rectangleArea(4, 5);
console.log(rectangleArea1);
// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
console.log(`Task 2`);

function circleArea(r) {
    return 3.14 * r ** 2;
}

let circleArea1 = circleArea(3);
console.log(circleArea1);
// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
console.log(`Task 34`);

function cylinderArea(r, h) {
    return 2 * 3.14 * r ** 2 + 2 * 3.14 * r * h;
}

let cylinderArea1 = cylinderArea(8, 12);
console.log(cylinderArea1);
// 4. створити функцію яка приймає масив та виводить кожен його елемент
console.log(`Task 4`);

function arrayIteration(arr) {
    for (let temp of arr) {
        console.log(temp);
    }
}

let arr1 = [23, 'ewrewr', true, 2323, {name: 'Vasyl', age: 23, hobby: 'travelling'}, 234];
arrayIteration(arr1);
// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
document.write(`Task 5`);

function someText(text) {
    document.write(`<p>${text}</p>`);
}

someText('A-ba-ba-ha-la-ma-ha... В полях, де тиша й самота німа...');

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write(`Task 6`);

function ulFoo(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ulFoo('Terminovo!!!');

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
document.write(`Task 7`);

function ulFoo2(text, n) {
    document.write(`<ul>`);
    for (let i = 0; i <= n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`<ul>`);
}
ulFoo2('The most impotent item', 12);

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log(`Task 8`);
function fooArr8(arr) {
    for (let temp of arr) {
        console.log(temp);
    }
}

fooArr8([23, 45, true, 'Kolya', false, 34]);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
document.write(`Task 9`);
function person (id, name, age) {
    document.write(`<div style="width: 250px; padding: 5px; border: 1px solid aqua; margin: 5px; box-sizing: border-box; color: red">`);
    document.write(`id: ${id}, name: ${name}, age: ${age}`);
    document.write(`</div>`);
}
person(1, 'Petro', 23);
person(2, 'Roman', 32);
person(3, 'Vladyk', 21);
