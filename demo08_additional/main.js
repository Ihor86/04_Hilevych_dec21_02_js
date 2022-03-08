// написати рекурсивну функцію, яка збирає всі назви класів
// з файлу rules.html в окремий масив. масив вивести в консоль
let Arr = [];
function scrapper (doc) {
    let childList = doc.children;
        for (const child of childList) {
            if (child.classList.length > 0) {
                Arr.push( child.classList);
            }
            scrapper (child);
        }
}
scrapper(document);
console.log(Arr);
