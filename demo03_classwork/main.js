// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
console.log(`Task 1`);
let arr1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
i1 = 0;
while (i1 < arr1.length) {
    console.log(arr1[i1]);
    i1++;
}
//     2. перебрати його циклом for
console.log(`Task 2`);
for (let i2 = 0; i2 < arr1.length; i2++) {
    console.log(arr1[i2]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log(`Task 3`);
i3 = 0;
while (i3 < arr1.length) {
    if (i3 % 2 === 1) {
        console.log(arr1[i3]);
    }
    i3++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(`Task 4`);
for (let i4 = 0; i4 < arr1.length; i4++) {
    if (i4 % 2 === 1) {
        console.log(arr1[i4])
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(`Task 5`);
i5 = 0;
while (i5 < arr1.length) {
    if (arr1[i5] % 2 === 0) {
        console.log(arr1[i5]);
    }
    i5++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log(`Task 6`);
for (let i6 = 0; i6 < arr1.length; i6++) {
    if (arr1[i6] % 2 === 0) {
        console.log(arr1[i6]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log(`Task 7`)
for (let temp of arr1) {
    if (temp % 3 === 0) {
        temp = "okten";
    }
    console.log(`${temp}`);
}
// 8. вивести масив в зворотньому порядку.
console.log(`Task 8`);
for (let i8 = arr1.length - 1; i8 >= 0; i8--) {
    console.log(arr1[i8]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//     1. перебрати його циклом while
console.log(`Task 9.1`);
i91 = arr1.length - 1;
while (i91 >= 0) {
    console.log(arr1[i91]);
    i91--;
}
// //     2. перебрати його циклом for
console.log(`Task 9.2`);
for (let i92 = arr1.length - 1; i92 >= 0; i92--) {
    console.log(arr1[i92]);
}
// //     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log(`Task 9.3`);
i93 = arr1.length - 1;
while (i93 >= 0) {
    if (i93 % 2 === 1) {
        console.log(arr1[i93]);
    }
    i93--;
}
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log(`Task 9.4`);
for (let i94 = arr1.length - 1; i94 >= 0; i94--) {
    if (i94 % 2 === 1) {
        console.log(arr1[i94])
    }
}
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log(`Task 9.5`);
i95 = arr1.length - 1;
while (i95 >= 0) {
    if (arr1[i95] % 2 === 0) {
        console.log(arr1[i95]);
    }
    i95--;
}
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log(`Task 9.6`);
for (let i96 = arr1.length - 1; i96 >= 0; i96--) {
    if (arr1[i96] % 2 === 0) {
        console.log(arr1[i96]);
    }
}
// // 7. замінити кожне число кратне 3 на слово "okten"
console.log(`Task 9.7`)
for (let i97 = arr1.length-1; i97 >=0; i97--) {
    if (arr1[i97] % 3 === 0) {
        arr1[i97] = "okten";
    }
    console.log(`${arr1[i97]}`);
}
