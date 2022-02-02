// // - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let h = 'hello';
let o = 'owu';
let ccc = 'com';
let u = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let www = true;
let rrr = false;

// //     Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(h);
alert(h);
document.write(h);

console.log(o);
alert(o);
document.write(o);

console.log(ccc);
alert(ccc);
document.write(ccc);

console.log(u);
alert(u);
document.write(u);

console.log(num1);
alert(num1);
document.write(num1);
console.log(num2);
alert(num2);
document.write(num2);

console.log(num3);
alert(num3);
document.write(num3);

console.log(num4);
alert(num4);
document.write(num4);

console.log(num5);
alert(num5);
document.write(num5);

console.log(num6);
alert(num6);
document.write(num6);

console.log(num7);
alert(num7);
document.write(num7);

console.log(www);
alert(www);
document.write(www);

console.log(rrr);
alert(rrr);
document.write(rrr);

// // - Переприсвоїти кожній змінній з завдання значення на довільне.
h = 'i';
o = 'am';
ccc = 'rabbit';
u = 'home';
num1 = 11;
num2 = 101;
num3 = -1999;
num4 = 1231;
num5 = 13.14;
num6 = 21.7;
num7 = 161;
www = 33;
rrr = 23;

// //     Вивести кожну змінну за допомогою: console.log , alert, document.write
console.log(h);
alert(h);
document.write(h);

console.log(o);
alert(o);
document.write(o);

console.log(ccc);
alert(ccc);
document.write(ccc);

console.log(u);
alert(u);
document.write(u);

console.log(num1);
alert(num1);
document.write(num1);
console.log(num2);
alert(num2);
document.write(num2);

console.log(num3);
alert(num3);
document.write(num3);

console.log(num4);
alert(num4);
document.write(num4);

console.log(num5);
alert(num5);
document.write(num5);

console.log(num6);
alert(num6);
document.write(num6);

console.log(num7);
alert(num7);
document.write(num7);

console.log(www);
alert(www);
document.write(www);

console.log(rrr);
alert(rrr);
document.write(rrr);


// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName;
let middleName;
let lastName;
firstName = 'Ihor';
middleName = 'Yaroslavovych';
lastName = 'Hilevych';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// // Я ЇХ ЗРАЗУ ЩЕ ВИВОДЖУ В КОНСОЛЬ!!!
let fn = "What is your first name?"
let mn = "What is your middle name?"
let ln = "What is your last name?"

myFirstName = prompt(fn);
console.log(myFirstName);
myMiddleName = prompt(mn);
console.log(myMiddleName);
myLastName = prompt(ln);
console.log(myLastName);

// //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
let myAge = "What is your age?"
myAge = prompt(myAge);
console.log('Hello, ' + myFirstName + ' ' + myMiddleName + '. You are ' + myAge + '.');

// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
console.log(5 !== 6);
console.log(5 === 6);
console.log(5 == 6);
console.log(5 > 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);
console.log(123 === '123');
console.log(123 == '123');

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); 205
// document.write(str - a + "<br/>"); 15
// document.write(str * "2" + "<br/>"); 40
// document.write(str / 2 + "<br/>"); 10

