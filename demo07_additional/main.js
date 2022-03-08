// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//як передати в конструктор функції властивості для внутрішніх об'єктів???
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

function Person(id, name, username, email, street, suite, city, zipcode, geoLat, geoLng, phone, website, companyName,  companyCatchPhrase, companyBS) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = function (street, suite, city, zipcode) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = function (geoLat, geoLng) {
            this.geoLat = geoLat;
            this.geoLng = geoLng;
        };
    };
    this.phone = phone;
    this.website = website;
    this.company = function (companyName,  companyCatchPhrase, companyBS) {
        this.name = companyName;
        this.catchPhrase = companyCatchPhrase;
        this.bs = companyBS;
    }
    // return Person;
}
let person1 = new Person(1, `Leanne Graham`, 'Bret', 'Sincere@april.biz', 'Kulas Light',
    'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(person1);
console.log(person1.email);
console.log(person1.company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
console.log(person1.address);
console.log(person1.address().street);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
//
// + ще одне завдання пдф-ФАЙЛОМ (скачав)
