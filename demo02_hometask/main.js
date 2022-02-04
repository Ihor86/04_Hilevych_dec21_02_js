// 1. Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число (в першу, другу, третю или четверту частину години). [Якщо число від 0 до 14 то попадає в першу чверть,від 15 до 29 в другу,перевірити число min,і вивести на екран в яку чверть попадає]

let time = +prompt('Enter a minute from 0 to 59');
if (!!!time || time<0 || time >=60) {console.log('wrong value'); //не знаю як відкинути дробові числа???
} else if (0<= time < 15) {console.log('1 quarter');
} else if (time < 30) {console.log('2 quarter');
} else if (time < 45) {console.log('3 quarter');
} else {console.log('4 quarter');
}

// 2.  У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=+prompt("What is the day of the month?");
console.log(day);
if (!!!day || day<1 || day>31) {console.log('wrong value'); //не знаю як відкинути дробові числа???
} else if (day<=10) {
    console.log('1 decada');
} else if (day<=20) {
    console.log('2 decada');
} else {
    console.log('3 decada');
}

// 3. У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = confirm("Are the Winter Olympic Games starting today?");
if (test) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}
let test2 = confirm("Are the Winter Olympic Games starting today?")? 'Вірно' : 'Неправильно';
console.log(test2);


// 4. Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = +prompt("Введіть по-черзі числа 1, 0, -3");
if (a === 0) {
    console.log('Невірно');
} else {
    console.log('Вірно');
}

// 5. Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.\
let dayOfWeek = +prompt('Введіть день тижня!');
switch (dayOfWeek) {
    case 1:
        console.log("20:00. Lesson at Octenweb");
        break;
    case 2:
        console.log('19:00. Visiting my grandma');
        break;
    case 3:
        console.log("20:00. Lesson at Octenweb");
        break;
    case 4:
        console.log("18:00. Gym");
        break;
    case 5:
        console.log("20:00. Lesson at Octenweb");
        break;
    case 6:
        console.log("14:00. Meeting with friends");
        break;
    case 7:
        console.log("10:00. Reading new book");
        break;
    default:
        console.log('Дані введено некоректно');
}


// 6. Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
(+prompt('Введіть, будь ласка, рік!') % 4 ===0)? console.log("Високосний"): console.log("Невисокосний"); // грає, якщо користувач вводить справді рік, бо якщо вводить любі символи, то показує, що "Невисокосний" щоб врахувати цей момент потрібно через if... else))

// 7. Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let jsOficialName = prompt('Яка «офіційна» назва JavaScript?');
if (jsOficialName === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}
