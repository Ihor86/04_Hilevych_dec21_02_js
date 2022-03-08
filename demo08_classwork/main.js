//
// // Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає елементу з ід main_header клас з назвою групи, в якій ви вчитесь (mon-year), та змінює колір тексту елементу
let addClassDec22 = document.getElementById(`main_header`); //сприймаємо це як ссилочний тип даних... тобто наша змінна - це лише обгортка
addClassDec22.classList.add('dec-22');
addClassDec22.style.color = `red`;
console.log(addClassDec22);
// b) робить ширину елементу ul 400px
let upChangeWidth = document.getElementsByTagName(`ul`); // якщо ТЕГ, то вже докюментс
upChangeWidth[0].style.width = `400px`; // їх може бути багато, бо це ШТМЛ-колекція, тому щоб доступитися, вже прописуємо індекс (якщо 1), або ж ітеруємо
upChangeWidth[0].style.border = `1px solid green`;
// c) робить ширину всіх елементів з класом linkList шириною 50%
console.log(`task c`);
let allElementsClassLinkList = document.getElementsByClassName('linkList');
for (const liElement of allElementsClassLinkList) { //якщо за класом є вже багато елементів, то їх потріно ітерувати і кожному з них щось додавати чи змінювати характеристики
    liElement.style.border = `solid 1px blue`;
    liElement.style.width = `50%`;
}
console.log(allElementsClassLinkList);

// d) отримує текст який зберігається в елементі з класом listElement2
console.log(`task d`);
let elementClassListElement2 = document.getElementsByClassName(`listElement2`);
let elementClassListElement2Text = elementClassListElement2[0].innerHTML;
console.log(elementClassListElement2Text);
// або ж без створення змінної
// console.log(elementClassListElement2[0].innerHTML);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let allElementsLi = document.getElementsByTagName(`li`);
for (const element of allElementsLi) {
    element.style.background = `gray`;
}
// f) отримує всі елементи 'a' та додає їм клас anchor
console.log(`Task f`);
let aCollection = document.getElementsByTagName(`a`);
for (const element of aCollection) {
    element.classList.add(`anchor`);
}
console.log(aCollection);
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
console.log(`Task g`);
for (const element of aCollection) {
    if (element.innerHTML === `link3`) {
        element.style.fontSize = `40px`;
        console.log(element);
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
console.log(`Task h`);
let aHCollection = document.getElementsByTagName(`a`);
for (const element of aHCollection) {
    let xxx = element.innerText;
    element.classList.add(`element-${xxx}`);
}
console.log(aHCollection);

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
console.log(`Task i`);
let subHeaderArr = document.getElementsByClassName(`sub-header`);
console.log(subHeaderArr);
for (const element of subHeaderArr) {
element.style.border = `1px solid black`;
    element.style.background = prompt(`Please, enter background`); // так потрібно вводити колір для кожного елемента
}
console.log(`Task i. Var 2. Через 1 prompt`);
let backgroundPrompt = prompt(`Please, enter background`); // так колір вводимо лише один раз
let subHeaderArr2 = document.getElementsByClassName(`sub-header`);
for (const element of subHeaderArr2) {
    element.style.border = `1px solid ${backgroundPrompt}`;
    element.style.background = backgroundPrompt;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
console.log(`Task j`);
let subHeaderArr3 = document.getElementsByClassName(`sub-header`);
for (const element of subHeaderArr3) {
    if (element.innerText === `content 2 segment`) {
        element.style.color = prompt(`Please, enter color`);
    }
}
// console.log(`Task j. Var. 2`);
let subHeaderArr4 = document.getElementsByClassName(`sub-header`);
let colorPrompt = prompt(`Please, enter color`);
for (const element of subHeaderArr4) {
    if (element.innerText === `content 2 segment`) {
        element.style.color = colorPrompt;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()
console.log(`Task k`);
let content1List = document.getElementsByClassName(`content_1`);
content1List[0].innerText = prompt(`Please, enter new text`);
console.log(content1List[0]);

// l) отримати елементи p та змінити їм padding на 20px
console.log(`Task l`);
let pList = document.getElementsByClassName(`p`);
for (const pListElement of pList) {
    pListElement.style.padding = `20px`;
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
console.log(`Task m`);
let text2List = document.getElementsByClassName(`text2`);
for (const text2ListElement of text2List) {
    text2ListElement.innerText = `dec-2021`;
}

