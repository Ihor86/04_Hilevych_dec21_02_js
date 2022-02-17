// ADDITIONAL
// 1. Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
console.log(`Task 1`);
let cutString = (str, n) => {
    let arrCutStrings = [];
    for (let i = 0; (i) * n <= str.length; i++) {
        if ((i + 1) * n <= str.length) {
            arrCutStrings[i] = str.substring(i * n, (i + 1) * n);
        } else if ((i + 1) * n > str.length) {
            arrCutStrings[i] = str.substring(i * n);
        }
    }
    return arrCutStrings;
}
console.log(cutString('рибонуклеїнова', 3));

// console.log(arrCutStrings);


// 2. Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
document.write(`Task 2 <br>`); // не зовсім зрозумів "не меньше ніж на 2 символ далі після равлика" - це включно з самою крапкою, чи між ними має бути мін. 2 символи??? я робив, що включно
let validator = (mailString) => {
    mailString.toString();
    mailString.toLowerCase();
    if (mailString.includes(`@`) && mailString.indexOf(`@`) > 0) {
        let mailArr = mailString.split(`@`);
        if (mailArr[1].indexOf(`.`) > 0) {
            document.write(`mail address is valid <br>`);
        } else document.write(`mail address is incorrect <br>`);
    } else document.write(`mail address is incorrect <br>`);
}

validator(`someemail@gmail.com`);
validator(`someeMAIL@gmail.com`);
validator(`someeMAIL@i.ua`);
validator(`some.email@gmail.com`);
validator(`@gmail.com`);
validator(`some.email@.gmail.com`);
validator(`some.email&gmail.com`);
validator(`kumTeliaPase`);


// 3. є масив let coursesArrayвідсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(`Task 3`);
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let sortArrAmountOfModulesElements = (arr) => {
    arr.sort((a, b) => b.modules.length - a.modules.length);
    console.log(arr);
}
sortArrAmountOfModulesElements(coursesArray);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономія це наука про небесні об'єкти";
// document.writeln(count(str, symb)) // 5
document.writeln(`Task 4 <br>`);
let str4 = "Астрономія це наука про небесні об'єкти";
let count = (str, stringsearch) => {
    let symbArr = str.split(stringsearch);
    return symbArr.length - 1;
}
document.writeln(`e -`);
document.writeln(count(str4, `е`));
document.writeln(`<br>`);
document.writeln(`о -`);
document.writeln(count(str4, `о`));
document.writeln(`<br>`);
document.writeln(`і -`);
document.writeln(count(str4, `і`));
document.writeln(`<br>`);
document.writeln(`ь -`);
document.writeln(count(str4, `ь`));
document.writeln(`<br>`);

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжіння прикладена до центру маси тіла";
// document.writeln(cutString(str, 5)) // 'Сила тяжіння прикладена до центру'
document.writeln(`Task 5 <br>`);
    let str5 = "Сила тяжіння прикладена до центру маси тіла";
let cutString2 = (str, n) => {
    let cutStr = str.split(` `);
    cutStr.splice(n);
    joinStr = cutStr.join(` `);
    document.writeln(joinStr);
}
cutString2(str5, 5);

