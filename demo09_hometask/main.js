// Все робити за допомоги js.
// 1. створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block1 = document.createElement(`div`);
document.body.appendChild(block1);
block1.innerText = `PTN PNH`;
block1.classList.add(`wrap`, `collapse`, `alpha`, `beta`);
block1.style.background = `green`;
block1.style.color = `red`;
block1.style.font = `20px`;
block1.style.margin = `20px`;
block2 = block1.cloneNode(true);
document.body.appendChild(block2);

// 2.- Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array2 = ['Main', 'Products', 'About us', 'Contacts'];
for (const element of array2) {
    let liElement = document.createElement(`li`);
    liElement.innerText = element;
    let ulMenu = document.getElementsByClassName(`menu`)[0];
    ulMenu.appendChild(liElement);
}

// 3. - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let coursesDiv = document.createElement(`div`);
document.body.appendChild(coursesDiv);
for (const course of coursesAndDurationArray) {
    let courseDiv = document.createElement(`div`);
    courseDiv.innerText = `Title: ${course.title}, Month duration: ${course.monthDuration}`;
    document.body.appendChild(courseDiv);
}

// 4.- Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//     let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
let coursesDiv2 = document.createElement(`div`);
document.body.appendChild(coursesDiv2);

for (const course of coursesAndDurationArray) {
    let courseDiv = document.createElement(`div`);
    courseDiv.classList.add(`item`);
    let h1title = document.createElement(`h1`);
    h1title.classList.add(`heading`);
    h1title.innerText = `Title: ${course.title}`;
    let pMonthDuration = document.createElement(`p`);
    pMonthDuration.classList.add(`description`);
    pMonthDuration.innerText = `Month duration: ${course.monthDuration}`;
    courseDiv.append(h1title, pMonthDuration);
    coursesDiv2.appendChild(courseDiv);
}





