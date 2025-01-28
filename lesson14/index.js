// let str = 'SOME random stRinG'

// const arr = str.split(' ')
// arr[1] = arr[1].toUpperCase()
// console.log(arr);
// str = arr.join(' ')
// console.log(str);

// ФУНКЦИИ
// function sayHi(username) {
//     console.log(`Hello, ${username}`);
// }

// sayHi('maksim')
// const login = prompt()
// sayHi(login)



// function math(a, b, c) {
//     console.log('a+b*c=', a + b *c);
// }
// math(10, 20, 5)
// math(20, 10, 5)
// math(5, 20, 10)
 

// function f(a, ...rest) {
//     console.log(a);
//     console.log(rest);

//     // console.log(arguments);
// }

// f(1,2,3,4,5,6,7)


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! REST AND SPREAD
// function f(...rest) {
//     console.log(rest);
//     console.log(...rest);

// }
// f(1,2,3,4,5,6,7)


// function sum(a,b) {
//     return a + b
// }
// console.log(sum (1,2));

// const sumVar = sum(5,6)
// console.log(sumVar);

//ФУНКЦИЯ ДРУГОЙ ВИД
// let sum = function (a,b) {
//     return a+b
// }
// console.log(sum(1,2));

// const sum = (a,b = 0) => a + b

// console.log(sum(2));
// console.log(sum(2,10));

// (function () {
//     console.log('Hello world');
// })()

// function hello() {
//     console.log('Hello world');
// } 
// hello()




// let str = 'qwerty'
// function strUp(str) {
//     let arr = str.split('')
//     for (let i = 0; i < arr.length; i++) {
        
//         if (i % 2 === 0) {
//             arr[i]= arr[i].toUpperCase();
//         } else {
//             arr[i]= arr[i].toLowerCase();
//         }
//     }
//     return arr.join('')
// }
// str = strUp(str)
// console.log(str);





//НЕ ПОНЯТНО

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


// function sum(num) {
//     const numStr = num.toString()
//     let sumDigit = 0

//     for (let i = 0; i < numStr.length; i++) {
//         sumDigit += +numStr[i]
//     }
//     return sumDigit;
// }

// console.log(sum(13564351));
