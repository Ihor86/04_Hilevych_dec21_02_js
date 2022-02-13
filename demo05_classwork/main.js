// Всі функції повинні бути описані стрілочним типом!!!!

// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log(`Task 1`);
let minNum = (num1, num2, num3) => {
    if (num1 <= num2 && num1 <= num3) { // ставлю <= , бо теоретично може прийти два однакових числа
        console.log(num1);
    } else if (num2 <= num1 && num2 <= num3) {
        console.log(num2);
    } else if (num3 <= num1 && num3 <= num2) {
        console.log(num3);
    }
}
minNum(412, 978, 1223);
// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log(`Task 2`);
let maxNum = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num3) { // ставлю >= , бо теоретично може прийти два однакових числа
        console.log(a);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log(num2);
    } else if (num3 >= num1 && num3 >= num2) {
        console.log(num3);
    }
}
maxNum(345, 198, 678);

// 3. створити функцію яка повертає найбільше число з масиву
console.log(`Task 3`);
let maxItemOfArr = (Arr) => {
    maxNum = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (maxNum < Arr[i]) {
            maxNum = Arr[i];
        }
    }
    return maxNum;
}
let maxNum1 = maxItemOfArr([234, 687, 23, 345, 12, 678, 234, 123, 124, 765, 123, 345]);
console.log(maxNum1);

// 4. створити функцію яка повертає найменьше число з масиву
console.log(`Task 4`);
let minItemOfArr = (Arr) => {
    let minNum = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (minNum > Arr[i]) {
            minNum = Arr[i];
        }
    }
    return minNum;
}
let minNum1 = minItemOfArr([12, 0, 1241, 123, 54, 21, 2354, 76, 423, 56, 56, 6, 3]);
console.log(minNum1);


// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log(`Task 5`);

let sumElementsOfArr = (Arr) => {
    let sum = 0;
    for (let element of Arr) {
        sum = sum + element;
    }
    return sum;
}
let sum1 = sumElementsOfArr([234, -5678, 23, -23, 324, -890, 0, 213, 325423, -2354]);
console.log(sum1);

// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(`Task 6`);
let arithmeticMeanOfArr = (Arr) => {
    let sum = 0, i = 0;
    for (; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum / i;
}

let arithmeticMean1 = arithmeticMeanOfArr([23412, 23, -23, 324, -890, 124124, 0, 213, 325423, -2354]);
console.log(arithmeticMean1);
// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log(`Task 7`);

let minMaxOfArr = (Arr) => {
    let minNum = Arr[0], maxNum = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (maxNum < Arr[i]) {
            maxNum = Arr[i];
        } else if (minNum > Arr[i]) {
            minNum = Arr[i];
        }
    }
    console.log(maxNum);
    return minNum;
}
let minNum71 = minMaxOfArr([4567, -12412, 23, 234, -23, -45, 34634, 123, 12312, -2341]);
console.log(minNum71);
// 8. створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log(`Task 8`);
let randomArr = (arr, num) => {
    for (i = 0; i < num; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }
    console.log(arr);
}
randomArr([], 12);
console.log(`Task 8. варіант 2`);
let randomArr2 = (num) => {
    let arr82 = [];
    for (i = 0; i < num; i++) {
        arr82[i] = Math.round(Math.random() * 100);
    }
    console.log(arr82);
}

randomArr2(14);

// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log(`Task 9`);
let randomArr9 = (arr, num, limit) => {
    for (i = 0; i < num; i++) {
        arr[i] = Math.round(Math.random() * limit);
    }
    console.log(arr);
}

randomArr9([], 9, 1000);
console.log(`Task 9. варіант 2`);
let randomArr92 = (num, limit) => {
    let arr92 = [];
    for (i = 0; i < num; i++) {
        arr92[i] = Math.round(Math.random() * limit);
    }
    console.log(arr92);
}
randomArr92(8, 100000);

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log(`Task 10`);
 let reversFunction = (arr) => {
    arrRevers = [];
    for (i = arr.length - 1, i2 = 0; i >= 0; i--, i2++) {
        arrRevers[i2] = arr[i];
    }
    console.log(arrRevers);
}

reversFunction(['oiyio', 980, 87, 34534, 'ewrew', 13, 'wqrq', -2323]);


