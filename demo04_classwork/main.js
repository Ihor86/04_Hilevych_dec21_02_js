// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log(`Task 1`);

function fooMin(a, b, c) {
    if (a <= b && a <= c) { // ставлю <= , бо теоретично може прийти два однакових числа
        console.log(a);
    } else if (b <= a && b <= c) {
        console.log(b);
    } else if (c <= a && c <= b) {
        console.log(c);
    }
}

fooMin(12, 9, 23);

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log(`Task 2`);

function fooMax(a, b, c) {
    if (a >= b && a >= c) { // ставлю >= , бо теоретично може прийти два однакових числа
        console.log(a);
    } else if (b >= a && b >= c) {
        console.log(b);
    } else if (c >= a && c >= b) {
        console.log(c);
    }
}

fooMax(12, 98, 23);

// 3. створити функцію яка повертає найбільше число з масиву
console.log(`Task 3`);

function maxItemOfArr(Arr) {
    max = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (max < Arr[i]) {
            max = Arr[i];
        }
    }
    return max;
}

let max1 = maxItemOfArr([23, 345, 12, 678, 123, 124, 765, 123, 345]);
console.log(max1);

// 4. створити функцію яка повертає найменьше число з масиву
console.log(`Task 4`);

function minItemOfArr(Arr) {
    let min = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (min > Arr[i]) {
            min = Arr[i];
        }
    }
    return min;
}

let min1 = minItemOfArr([123, 54, 21, 2354, 76, 423, 56, 56, 6, 3]);
console.log(min1);


// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log(`Task 5`);

function sumElementsOfArr(Arr) {
    let sum = 0;
    for (let element of Arr) {
        sum = sum + element;
    }
    return sum;
}
let sum1 = sumElementsOfArr([23, -23, 324, -890, 0, 213, 325423, -2354]);
console.log(sum1);

// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(`Task 6`);

function arithmeticMeanOfArr(Arr) {
    let sum = 0, i = 0;
    for ( ; i < Arr.length; i++) {
        sum = sum + Arr[i];
    }
    return sum / i;
}
let arithmeticMean1 = arithmeticMeanOfArr([23, -23, 324, -890, 0, 213, 325423, -2354]);
console.log(arithmeticMean1);
// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log(`Task 7`);
function minMaxOfArr (Arr) {
    let min = Arr[0], max = Arr[0];
    for (let i = 0; i < Arr.length; i++) {
        if (max < Arr[i]) {
            max = Arr[i];
        } else if (min > Arr[i]) {
            min = Arr[i];
        }
    }
    console.log(max);
    return min;
}
let min71 = minMaxOfArr([23, 234, -23, -45, 34634, 123, 12312, -2341]);
console.log(min71);
// 8. створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log(`Task 8`);
function randomArr(arr, num) {
    for (i=0; i < num; i++) {
        arr[i] = Math.round(Math.random()*100);
    }
    console.log(arr);
}
randomArr([], 12);
console.log(`Task 8. варіант 2`);
function randomArr2(num) {
    let arr82 = [];
    for (i=0; i < num; i++) {
        arr82[i] = Math.round(Math.random()*100);
    }
    console.log(arr82);
}
randomArr2( 14);

// 9. створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
console.log(`Task 9`);
function randomArr9(arr, num, limit) {
    for (i=0; i < num; i++) {
        arr[i] = Math.round(Math.random()*limit);
    }
    console.log(arr);
}
randomArr9([], 12, 1000);
console.log(`Task 9. варіант 2`);
function randomArr92(num, limit) {
    let arr92 = [];
    for (i=0; i < num; i++) {
        arr92[i] = Math.round(Math.random()*limit);
    }
    console.log(arr92);
}
randomArr92( 14, 10000);

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log(`Task 10`);
function fooRevers(arr) {
    arrRevers = [];
    for (i=arr.length -1, i2=0 ; i >= 0; i--, i2++) {
        arrRevers[i2] = arr[i];
    }
    console.log(arrRevers);
}
fooRevers([23, 234, 464, 'ewrew', 13, 'wqrq', -2323]);



