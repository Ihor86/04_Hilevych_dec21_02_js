//
// 1. створити масив з:
//     - з 5 числових значень
console.log(`Task 1`);
let arr11 = [23, 56, 345, -12, 34];
console.log(arr11);
// - з 5 стічкових значень
let arr12 = ['street', 'tree', 'bus', 'bicycle', 'yellow card'];
console.log(arr12);
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arr13 = ['soldier', true, 123, 'beer', false];
console.log(arr13);

// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
console.log(`Task 2`);
let arr21 = [];
arr21[0] = 23;
arr21[1] = 'car';
arr21[2] = 'univer';
arr21[3] = true;
console.log(arr21);

// 3.  За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`Task 3`);
let arr31 = [23, 45, 56, 'bus', 'car', true, 56, -890, 'London', 'cat'];
for (let i = 0; i < arr31.length; i++) {
    document.write(`<div style="border: 1px solid aqua; margin: 5px; padding-left: 5px; width: 100px">${arr31[i]}</div>`);
}


// 4.- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`Task 4`);
for (let i = 0; i < arr31.length; i++) {
    document.write(`<div style="border: 1px solid red; margin: 5px; padding-left: 5px; width: 200px">${arr31[i]}, індекс ${i} </div>`);
}

// 5.- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`Task 5`);
let arr51 = [];
let i51 = 0;
while (arr51.length <= 20) {
    arr51[i51] = Math.floor(Math.random() * 100);
    document.write(`<h1>${arr51[i51]}</h1>`);
    i51++;
}
// 6.- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//роблю h2, щоб нормально запускалися!!!!
document.write(`Task 6`);
let arr61 = [];
let i61 = 0;
while (arr61.length <= 20) {
    arr61[i61] = Math.floor(Math.random() * 1000);
    document.write(`<h2>${arr61[i61]}, index ${i61}</h2>`);
    i61++;
}

// 7. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log(`Task 7`);
let arr71 = [23, 45, 56, -34, 56, 234, 56, -890, 0, 3.14];
for (let temp of arr71) {
    console.log(`${temp}`);
}
// 8. - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log(`Task 8`);
let arr81 = ['bus', 'house', 'bus', 'car', 'tree', 'car', 'tram', 'car', 'Andrij', 'car'];
for (let temp of arr81) {
    console.log(`${temp}`);
}

// 9.- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log(`Task 9`);
let arr91 = [23, 45, 56, 'bus', 'car', true, 56, -890, 'London', 'cat'];
for (let temp of arr91) {
    console.log(`${temp}`);
}

// 10.- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log(`Task 10`);
let arr101 = [23, true, 56, false, 'car', true, 56, -890, 'London', false];
for (let temp of arr101) {
    if (typeof (temp) === `boolean`) {
        console.log(`${temp}`);
    }
}
// 11.- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log(`task 11`);
let arr111 = [12, 34, true, false, 'tree', 'bus', 'Vasylko', 35, 7897, 'turbo'];
for (let temp of arr111) {
    if (typeof (temp) === 'number') {
        console.log(`${temp}`)
    }
}
// 12.- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log(`Task 12`);
let arr112 = [true, 'tree', 22, 'yanky', false, 23, 6789, 'Lviv', 'univer', 0];
for (let temp of arr112) {
    if (typeof (temp) === "string") {
        console.log(`${temp}`);
    }
}
// 13.- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
console.log(`Task 13`);
let arr113 = [];
arr113[0] = true;
arr113[1] = 112;
arr113[2] = 'tree';
arr113[3] = 'capital';
arr113[4] = 'fild';
arr113[5] = false;
arr113[6] = 345;
arr113[7] = -113;
arr113[8] = 'town';
arr113[9] = true;
for (i113 = 0; i113 < 10; i113++) {
    console.log(`${arr113[i113]}`);
}

// 14.- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`Task 14`);
document.write(`Task 14 <br>`);
for (i114 = 0; i114 < 10; i114++) {
    console.log(`${i114 + 1}`);
    document.write(`${i114 + 1} <br>`);
}
// 15.- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log(`Task 15`);
document.write(`Task 15 <br>`);
for (i115 = 0; i115 < 100; i115++) {
    console.log(`${i115 + 1} `);
    document.write(`${i115 + 1} <br>`);
}
// 16.- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log(`Task 16`);
document.write(`Task 16 <br>`);
for (i116 = 0; i116 < 100; i116+=2) {
    console.log(`${i116/2 + 1}`);
    document.write(`${i116/2 + 1} <br>`);
}
// 17.- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log(`Task 17`);
document.write(`Task 17 <br>`);
for (i117 = 0; i117<100; i117++) {
    if ((i117+1)%2===0) {
        console.log(`${i117+1}`);
        document.write(`${i117+1} <br>`);
    }
}
// 18.- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log(`Task 18`);
document.write(`Task 18 <br>`);
for (i118=0; i118<100; i118++) {
    if(i118%2===0) {
        console.log(`${i118+1}`);
        document.write(`${i118+1} <br>`);
    }
}
