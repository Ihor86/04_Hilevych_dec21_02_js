// 1. Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
console.log(`Task 1`);
let normalizeNames = (str) => {
    let symbol;
    if (str.includes(`.`)) {
        symbol = `.`;
    } else if (str.includes(`_`)) {
        symbol = `_`;
    } else if (str.includes(`-`)) {
        symbol = `-`;
    }
    let newArr = [];
    if (str.includes(symbol)) {
        let element = str.split(symbol);
        element.forEach((item) => {
            if (item) newArr.push(item); // В тих місцях, де є по кілька однакових знаків (. - _) підряд split розрізує
            // по них та утворює пусті стрінги, які ми на тому іфі відсіваємо, бо  в if перевірка чи item це
            // не пуста стрінга "", яка дає false
        })
        console.log(newArr.join(` `));
    }
}
normalizeNames('Harry..Potter');
normalizeNames('Ron---Whisley');
normalizeNames('Hermione__Granger');

//
// 2. створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log(`Task 2`);
let randomNumberGenerator = length => {
    let arr = [];
    while (arr.length < length) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}
randomArr1 = randomNumberGenerator(12);
console.log(randomArr1);

// 3. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// його за допомоги sort
console.log(`Task 3`);
let sortRandomArray = (length, num) => {
    let randomArray = [];
    while (randomArray.length < length) {
        randomArray.push(Math.round(Math.random() * num));
    }
    return randomArray.sort((a, b) => a - b);
}
console.log(sortRandomArray(9, 1000));


// 4.  створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(`Task 4`);
let evenNumbersRandomArray = (length, num) => {
    let randomArr = [];
    while (randomArr.length < length) {
        randomArr.push(Math.round(Math.random() * num));
    }
    return randomArr.filter(value => value % 2 === 0);
}
console.log(evenNumbersRandomArray(8, 100));


// 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(`Task 5`);
let transformElementsOfRandomArrToStrings = (length, num) => {
    let randomArr = [];
    while (randomArr.length < length) {
        randomArr.push(Math.round(Math.random() * num));
    }
    return randomArr.map(value => value.toString());
}
console.log(transformElementsOfRandomArrToStrings(23, 100));

// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
console.log(`Task 6`);
let sortNums = (arr, direction) => {
    if (direction === `ascending`) {
        arr.sort((a, b) => a - b);
    } else if (direction === `descending`) {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortNums([11, 21, 3], `ascending`));
console.log(sortNums([11, 21, 3], `descending`));

// 7.  є масив
console.log(`Task 7`);
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArray = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sortArray);


// 8.  відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(`Task 8`);
let filtrArrayMore5mounth = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filtrArrayMore5mounth);
