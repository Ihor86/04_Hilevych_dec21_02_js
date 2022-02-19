// 1. Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log(`Task 1`);
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, `Albatros`, `Bayden`, `bayden.a@gmail.com`, 380960567234);
let user2 = new User(12, `Alf`, `Bayden`, `bayden.alf@gmail.com`, 380960723564);
let user3 = new User(33, `Alfred`, `Bayden-Old`, `bayden-old.a@gmail.com`, 380926056734);
let user4 = new User(14, `Alfons`, `Bayden-Shramko`, `bayden-shramko.a@gmail.com`, 380966723054);
let user5 = new User(52, `Albion`, `Bay-Bay`, `baybay.a@gmail.com`, 380960345672);
let user6 = new User(26, `Albakerka`, `Baydensito`, `baydensito.a@gmail.com`, 380960523467);
let user7 = new User(37, `Albatros Junior`, `Baydenko`, `baydenko.a@gmail.com`, 380960723564);
let user8 = new User(18, `Alba`, `Baydun`, `baydun.a@gmail.com`, 380960562347);
let user9 = new User(9, `Albatrosito`, `Bayburezhma`, `bayburezhma.a@gmail.com`, 380960567234);
let user10 = new User(13, `Albatrosohly`, `Baybur`, `baybur.a@gmail.com`, 380956723460);
let userArr = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(userArr);

// 2. Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(`Task 2`);
let filter = userArr.filter(user => user.id % 2 === 0);
console.log(filter);

// 3. Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(`Task 3`);
let sortUsers = userArr.sort((a, b) => a.id - b.id);
console.log(sortUsers);
// 4. створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
console.log(`Task 4`);
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [];
clientArr[0] = new Client(1, `Petro`, `Kuk`, `kuk@gmail.com`, 380960650987, [`bred`, `cola`, `salt`]);
clientArr[1] = new Client(2, `Max`, `Otor`, `otor@gmail.com`, 380987654334, [`milk`]);
clientArr[2] = new Client(3, `Stakh`, `Panko`, `panro@gmail.com`, 380976584334, [`butter`, `sugar`]);
clientArr[3] = new Client(4, `Leon`, `Killer`, `killer@gmail.com`, 380986666666, [`desk`, `pepsi`, `coffee`]);
clientArr[4] = new Client(5, `Misko`, `Barbara`, `barbara@gmail.com`, 380986235666, [`trousers`, `shirt`, `pen`, `pencil`]);
clientArr[5] = new Client(6, `Petruchio`, `Makron`, `makron@gmail.com`, 380960650987, [`bred`, `cola`, `salt`]);
clientArr[6] = new Client(7, `Max`, `Otor`, `otor@gmail.com`, 380987654334, [`pen`, `pencil`]);
clientArr[7] = new Client(8, `Stakh`, `Panko`, `pan@gmail.com`, 380976245534, [`butter`, `sugar`]);
clientArr[8] = new Client(9, `Levko`, `Kil`, `kil@gmail.com`, 380986662346, [`sugar`, `pepsi`]);
clientArr[9] = new Client(10, `Marusyna`, `Barby`, `barby@gmail.com`, 380986235546, [`hat`, `shirt`, `cola`, `salt`]);
console.log(clientArr);
// 5. Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(`Task 5`);
let clientArrSort = clientArr.sort((a, b) => a.order.length - b.order.length);
console.log(clientArrSort);
