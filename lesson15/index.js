// const arr = [5,213,13,213,21,312,321,7654,1251,666]

// let max = arr[0]
// let min = arr[0]

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max)  {
//     max = arr[i]
//     }
//     if (arr[i] < min)  {
//     min = arr[i]
//     }
// }
// console.log(max);
// console.log(min);



// function hello(name) {
//     console.log(`Hello ${name}`);
// }

// function input(callback) {
//     const name = prompt('Enter your name:')
//     callback(name);
// }

// input(hello)


// function AtoB1(nextpoint) {
//     const transport = 'bus'
//     const friend = 'John Doe'
//     nextpoint(transport, friend)
    
// }


// function BtoC1(transport, friend) {
// console.log(`we are traveling on ${transport} with ${friend}`);
// }

// AtoB1(BtoC1)

// const createPlayer = (initialScore) => {
//     let score = initialScore; // Приватная переменная**
//     return {
//         getScore: function() {
//         return score;
//         },
//         addScore: function(amount) {
//             score += amount;
//         }
//     }
// }

//     const player1 = createPlayer(100);
//     console.log(player1.getScore()); // 100
//     player1.addScore(50);
//     console.log(player1.getScore()); // 150

//     const player2 = createPlayer(65)
//     console.log(player2.getScore()); // 65
//     player2.addScore(33);
//     console.log(player2.getScore()); // 98





// МЕТОД    SOME

// const arr = [31,53,63,7,15,71,47,63]

// const resultSome = arr.some(el => el % 3 === 0)
// console.log(resultSome);
// const resultSome2 = arr.some(function(el) {
//     return el % 3 === 0
//     });
//     for (let i = 0; i < arr.length; i++) {
//         if (f(arr[i]) === true) {
//             break;
//         }
//     }
//     function f(el)  {
//         return el % 3 === 0
//     } 
//     console.log(resultSome2);
// // const arrowF = el => true


// const arr = [31,53,63,7,15,71,47,63]
// let res = false
// for (let i = 0; i < arr.length; i++) {
//     const isTrue = customSome(arr[i])
//     if (customSome(arr[i]) === true) {
//         res = true;
//     }
// }
// function customSome(element)  {
//     if (element % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(res);


// МЕТОД EVERY 
// const arr = [31,53,63,7,15,71,47,63]
// const resultEvery = arr.every(el => el % 3 === 0)
// console.log(resultEvery);


// FILTER
// const arr = [31,53,63,7,15,71,47,63]
// const resultFilter = arr.filter(el => el % 3 === 0)
// console.log(resultFilter);

//SORT 
// const arr = [31,53,63,7,15,71,47,63]
// const resultSort = arr.sort((curr, next) => curr - next)
// console.log(resultSort);


// FLAT 
// const toFlatArr = [[1,3,4], [5,6], 7]
// const flatArr = toFlatArr.flat()
// console.log(flatArr);


// FOREACH
// const arr = [31,53,63,7,15,71,47,63]
// arr.forEach(el => {
//    console.log(el * 2);
// })
// console.log(arr);


// MAP
// const arr = [31,53,63,7,15,71,47,63]
// const resultMap = arr.map(el => el * 2);
// console.log(resultMap);

//FLATMAP 
// const arr = [31,53,63,7,15,71,47,63]
// const flatMapArr = [[1], [2], [3]]
// const resultMap = flatMapArr.flatMap(el => el * 8);
// console.log(resultMap);

//FIND 
// const arr = [
//     {a : 2, b: 2},
//     {a : 3, b: 1},
//     {a : 4, b:3}
// ]
// const resultFind = arr.find(el => el.a === 3);
// console.log(resultFind);

// REDUCE
// const arr = [31,53,63,7,15,71,47,63]
// const sum = arr.reduce((acc, el) => acc + el, 0)
// console.log(sum);










