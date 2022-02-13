// 1.- Дано натуральное число n. Выведите все числа от 1 до n.
console.log(`Task 1`);
let iterator = (n) => {
    for (i=1; i<=n; i++) {
        console.log(i);
    }
}
iterator(12);

// 2.- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let iterator2 = (a, b) => {
    if (a<b) {
        for (let num1 = a; num1<=b; num1++) {
            console.log(num1);
        }
    } else if (a>b) {
        for (let num2 = b; num2<=a; num2++) {
            console.log(num2);
        }
    }
}
console.log(`Task 2_a>b`);
iterator2(23, 5);
console.log(`Task 2_a<b`);
iterator2(8, 15);

// 3.  функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

console.log(`Task 3`);
let changeSequence = (arr, i) => {
    let element1 = arr[i];
   let element2 = arr[i+1];
    arr[i] = element2;
    arr[i+1] = element1;
    console.log(arr);
}
changeSequence([9,8,0,4], 0);
changeSequence([9,8,0,4], 1);
changeSequence([9,8,0,4], 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log(`Task 4`);

let iteratorEnd0 = (arr) => {
    let newArr = [];
    let i = 0;
    // let i2 = 0;
    for (let element of arr) {
        if (element > 0) {
            newArr[i] = element;
            i++;
        }
    }
    for (let element of arr) {
        if (element === 0) {
            newArr[i] = element;
            i++;
        }
    }
    console.log(newArr);
}
iteratorEnd0([1,0,6,0,3]);
iteratorEnd0([0,1,2,3,4]);
iteratorEnd0([0,0,1,0]);
