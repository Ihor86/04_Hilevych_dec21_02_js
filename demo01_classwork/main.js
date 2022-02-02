// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let Arr01 = [];
Arr01[0]=Math.floor(Math.random()*10);
Arr01[1]=Math.floor(Math.random()*10);
Arr01[2]=Math.floor(Math.random()*10);
Arr01[3]=Math.floor(Math.random()*10);
Arr01[4]=Math.floor(Math.random()*10);
Arr01[5]=Math.floor(Math.random()*10);
Arr01[6]=Math.floor(Math.random()*10);
Arr01[7]=Math.floor(Math.random()*10);
Arr01[8]=Math.floor(Math.random()*10);
Arr01[9]=Math.floor(Math.random()*10);
console.log(Arr01);
let result01 = Arr01[0] + Arr01[1] + Arr01[2] + Arr01[3] + Arr01[4] + Arr01[5] + Arr01[6] + Arr01[7] + Arr01[8] + Arr01[9];
console.log(result01);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    "title": "Second World War",
    "pages": 324,
    "genre": "scientific monograph"
};
console.log(book1);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    "title": "The history of Britain empire",
    "pages": 456,
    "genre": "scientific monograph",
    "authors": ['Vlad Nixon', 'Petro Rybachuk', 'Kris Jonson']
};

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [
    book11 = {
        "title": "The history of Britain empire",
        "pages": 456,
        "genre": "scientific monograph",
        "authors": ['Vlad Nixon', 'Petro Rybachuk', 'Kris Jonson']
    },
    book12 = {
        "title": "The history of European Union",
        "pages": 234,
        "genre": "scientific monograph",
        "authors": ['Tomas Mur', 'Petro Zakhalavnyy', 'Kristofer Junior Jonson']
    },
    book13 = {
        "title": "Gone With the Wind",
        "pages": 768,
        "genre": "novel",
        "authors": 'Margaret Mitchell'
    },
    book14 = {
        "title": "Star Wars",
        "pages": 123,
        "genre": "sci-fi",
        "authors": 'George Lucas'
    },
];
console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
let height = 23;
let width = 10;
let s = height*width;
console.log(s);
// Значення площі зберігати в змінній s.
// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
const PI = 3.14;
let v = Math.pow(dC/2, 2)*PI*heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) +  Math.pow(m, 2));
console.log(k);

