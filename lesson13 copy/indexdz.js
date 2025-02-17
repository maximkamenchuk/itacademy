//lesson13

//zadanie 1
// Создаем массив с дубликатами
// let arrWithDuplicates = [1, 2, 2, 3, 3, 4, 4, 5, 1, "a", "b", "a", "c"];
// let uniqueArray = []; // массив для хранения уникальных значений
// for (let i = 0; i < arrWithDuplicates.length; i++) {
//   let item = arrWithDuplicates[i]; // текущий элемент
//   let alreadyExists = false; // флаг для проверки, есть ли уже элемент в уникальном массиве
//   for (let j = 0; j < uniqueArray.length; j++) {
//     if (uniqueArray[j] === item) {
//       alreadyExists = true; // элемент уже есть
//       break;
//     }
//   }
//   if (!alreadyExists) {
//     uniqueArray.push(item); // добавляем элемент, если его еще нет
//   }
// }
// console.log(uniqueArray);

//zadanie 2
//(ЦИКЛ)
// let number = 9; // Число для которого нужно вычислить факториал
// let factorial = 1; // Начальное значение факториала (факториал 0 равен 1)
// // Используем цикл for для вычисления факториала
// for (let i = 2; i <= number; i++) {
//   factorial *= i; // Умножаем текущее значение факториала на i
// }
// console.log(`Факториал числа ${number} равен ${factorial}`); //Результат

//(ФУНКЦИЯ)
// function factorial(n) {
//     if (n < 0) {
//         return undefined;
//     }
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// let number = 7;
// let result = factorial(number);
// console.log(result);

//zadanie 3
// let age = 2024
// if (age % 4 === 0) {
//     console.log('Високосный год');
// } else {
//     console.log('Не Високосный год');
// }

//zadanie 4
// const arr = [1, 2, 2, 3, 'f', 's', 'a', 's', 3, 'a'];
// const obj = {}; // Объект для хранения количества вхождений
// for (const element of arr) { // Использую цикл for_of для перебора элементов массива
//   if (obj[element] === undefined) {
//     obj[element] = 1; // Если элемента нет, добавляю его со счетчиком 1
//   } else {
//       obj[element]++;  // Если элемент уже есть, увеличиваю счетчик
//     }
// }
// for (const element in obj) { // Вывожу результат, используя for_in
//    console.log(`Элемент "${element}" встречается ${obj[element]} раз.`);
// }

//zadanie 5   //FOR IN
// const obj = {
//     name:'John',
//     age: 20,
//     study: 'Oxford'
// }
// for (const element in obj) {
//         console.log(element);
//     }

//zadanie 6    //FOR OF
//МОЙ ВАРИАНТ (ЦИКЛ)
// const obj = [
//     {name:'John', age: 10},
//     {name: 'Jane', age: 54},
//     {name: 'Jack', age: 16}
// ]
// for (const {name, age} of obj) {
//        if (age > 18) {
//         console.log(`${name} is older than 18!`);
//        }
//     }

// ВАРИАНТ НА ЗАНЯТИИ 14 (ФУНКЦИЯ+ЦИКЛ)
// const people = [
//     {name: 'John', age: 20},
//     {name: 'Jane', age: 15},
//     {name: 'Jordan', age: 25}
// ]
// function isAdult(arr) {
//     const names = []
//     for (const element of arr) {
//         if (element.age >= 18) {
//             names.push(element.name)
//         }
//     }
//     return names;
// }
// console.log(isAdult(people));
// isAdult(people)

//zadanie 7
// const array = Array(10).fill().map(() => Math.floor(101 * Math.random()));
// console.log(array);
