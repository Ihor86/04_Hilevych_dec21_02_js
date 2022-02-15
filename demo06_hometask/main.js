// 1. Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(`Task 1`);
let a1 = 'hello world';
let b1 = 'lorem ipsum';
let c1 = 'javascript is cool';
console.log(a1.length);
console.log(b1.length);
console.log(c1.length);

// 2. Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(`Task 2`);
console.log(a1.toUpperCase());
console.log(b1.toUpperCase());
console.log(c1.toUpperCase());

// 3. Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(`Task 3`);
let a3 = 'HELLO WORLD';
let b3 = 'LOREM IPSUM';
let c3 = 'JAVASCRIPT IS COOL';
console.log(a3.toLowerCase());
console.log(b3.toLowerCase());
console.log(c3.toLowerCase());

// 4. Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log(`Task 4`);
let str4 = ' dirty string   ';
console.log(str4.replace(` `, ``));
//
// 5. Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
console.log(`Task 5`);
let stringToarray = (str) => {console.log(str.split(` `));};
let str5 = 'Каждый охотник желает знать';
stringToarray(str5);
//
// 6. Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
document.write(`Task 6 <br>`);
let delete_characters = (str, length) => {
    return str.substring(0, 7);
}
let str6 = 'Каждый охотник желает знать';
document.write(delete_characters(str6, 7));

// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
document.write(`<br> Task 7 <br>`);
let insert_dash = str => str.replace(` `, `-`).toUpperCase();
let str7 = "HTML JavaScript PHP";
document.writeln(insert_dash(str7));

// 8. Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log(`Task 8`);
let firstElementToUpperCase = str => str[0].toUpperCase().concat(str.slice(1));
console.log(firstElementToUpperCase(a1));

// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
console.log(`Task 9`);
let capitalize = str => str.split(` `).map(wordOfStr=>wordOfStr.charAt(0).toUpperCase()+wordOfStr.slice(1)).join(` `);
console.log(capitalize(`кум теля пасе`));

