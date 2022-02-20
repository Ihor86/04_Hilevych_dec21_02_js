// 1. Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log(`Task 1`);

function Car(model, developer, year, speed, power) {
    this.model = model;
    this.developer = developer;
    this.year = year;
    this.speed = speed;
    this.power = power;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${speed} на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model}, developer - ${this.developer}, year - ${this.year}, speed - ${this.speed}, power - ${this.power}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.speed = newSpeed;
        console.log(this.speed);
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    this.addDriver = function (driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car1 = new Car(`A 6`, `Mazda`, 2015, 220, 2000);
console.log(car1);
car1.drive();
car1.info();
car1.increaseMaxSpeed(300);
car1.changeYear(2019);
car1.addDriver({name: `Mykola`, age: 38, experience: 10});

// 2. (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log(`Task 2`);
class BigCar {
    constructor(model, developer, year, speed, power) {
        this.model = model;
        this.developer = developer;
        this.year = year;
        this.speed = speed;
        this.power = power;
    };
    drive() {
        console.log(`їдемо зі швидкістю ${this.speed} на годину`);
    };
    info() {
        console.log(`model - ${this.model}, developer - ${this.developer}, year - ${this.year}, speed - ${this.speed}, power - ${this.power}`);
    };
    increaseMaxSpeed(newSpeed) {
        this.speed = newSpeed;
        console.log(this.speed);
    };
    changeYear(newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    addDriver(driver) {
        this.driver = driver;
        console.log(this.driver);
    }
}

let car21 = new BigCar(`X5`, `BMW`, 2019, 200, 2000);
car21.drive();
car21.info();
car21.increaseMaxSpeed(300);
car21.changeYear(2021);
car21.addDriver({name: `Tolyan`, age: 35, experience: 15});

// 3. створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log(`Task 3`);
class Popelyushka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let popelyushka1 = new Popelyushka(`Marya`, 17, 35);
let popelyushka2 = new Popelyushka(`Marusyna`, 15, 37);
let popelyushka3 = new Popelyushka(`Olya`, 18, 39);
let popelyushka4 = new Popelyushka(`Natalya`, 17, 38);
let popelyushka5 = new Popelyushka(`Olexanda`, 18, 36);
let popelyushka6 = new Popelyushka(`Nelya`, 16, 35);
let popelyushka7 = new Popelyushka(`Tanya`, 20, 37);
let popelyushka8 = new Popelyushka(`Bella`, 18, 38);
let popelyushka9 = new Popelyushka(`Beatrix`, 19, 37);
let popelyushka10 = new Popelyushka(`Sasha`, 17, 40);
let popelyushkyArr = [popelyushka1, popelyushka2, popelyushka3, popelyushka4, popelyushka5, popelyushka6, popelyushka7, popelyushka8, popelyushka9, popelyushka10];
console.log(popelyushkyArr);
// 4. Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(`Task 4`);
class Prince {
    constructor(name, age, findShose) {
        this.name = name;
        this.age = age;
        this.findShose = findShose;
    }
}

let prince = new Prince(`Petruchio`, 29, 36);
console.log(prince);

let para = (popelyushkyArr, prince) => {
    for (let person of popelyushkyArr) {
        if (person.footSize === prince.findShose) {
            return `Нарешті ми знайшли попелюшку!! Це - ${person.name}`;
        }
    }
};
let ourPara = para(popelyushkyArr,prince);
console.log(ourPara);

let findPopelyushka = popelyushkyArr.find((person) => person.footSize === prince.findShose);
console.log(findPopelyushka);
