// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// 1.- отримує текст з параграфа з id "content"
console.log(`Task 1`);
let textFromP = document.getElementById(`content`);
console.log(textFromP);
// або без створення змінної
console.log(`Task 1. Var. 2`);
console.log(document.getElementById(`content`));

// 2. отримує текст з блоку з id "rules"
console.log(`Task 2`);
let textById = document.getElementById(`rules`);
console.log(textById);

// 3. замініть текст параграфа з id 'content' на будь-який інший
console.log(`Task 3`);
textFromP.innerHTML = '<h3>Loren PTN PNH... la-la-la</h3>'; // порсто переприсвоюємо
console.log(textFromP);
// 4. замініть текст параграфа з id 'rules' на будь-який інший
textById.innerHTML = `<h3>A-ba-ba-ha-la-ma-ha</h3>`;
// 5. змініть кожному елементу колір фону на червоний
let changeBackground = document.body.children;
for (const changeBackgroundElement of changeBackground) {
    changeBackgroundElement.style.backgroundColor = `red`;
}
// 6. змініть кожному елементу колір тексту на синій
let changeColor = document.body.children;
for (const changeColorElement of changeColor) {
    changeColorElement.style.color = `blue`;
}
// 7. отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(`Task 7`);
let classListIdRules = document.getElementById('rules').classList;
console.log(classListIdRules);
// 8. поміняти колір тексту у всіх елементів fc_rules на червоний || роблю інший, щоб не зливалося
let fcRulesList = document.getElementsByClassName(`fc_rules`);
for (const element of fcRulesList) {
    element.style.color = `green`;
}

