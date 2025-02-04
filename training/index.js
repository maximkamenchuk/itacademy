//zadacha 1

// const obj1 = {
//     foo: 'foo',
//     bar: 'bar'
// }


// const obj2 = {
//     bar: 'foo',
//     some: 'some'
// }


// const result = {
//     foo: 'foo',
//     bar: 'foo'
// }


//1 sposob resheniya 

// const margeSomeKeysOfObject = (obj1, obj2) => {
//     let obj1keys = Object.keys(obj1);
//     let obj2keys = Object.keys(obj2);
//     for (let i = 0; i < obj1keys.length; i++) {
//         let key1 = obj1keys[i]
//         for (let j = 0; j < obj2keys.length; j++) {
//             let key2 = obj2keys[j]
//             if (key1 === key2) {
//                 obj1[key1] = obj2[key2]
//         }
//     }
//     }
// console.log(obj1);
// }

// margeSomeKeysOfObject(
//     {foo: 'foo', bar:'bar'},
//     {bar: 'foo', some:'some'}
// );



//2 sposob resheniya

// const margeSomeKeysOfObject = (obj1, obj2) => {
//     for (const key in obj1)
//         if (obj2.hasOwnProperty(key)) {
//             obj1[key] = obj2[key]
//         }
//     console.log(obj1);
// }

// margeSomeKeysOfObject(
//     {foo: 'foo', bar:'bar'},
//     {bar: 'foo', some:'some'}
// ); 



//zadacha 2 // НЕ РЕШЕНО

// const arr = [6.1, 4.2, 6.3]
// callbackFunction  = Math.floor
// result = {
//     '4': [4.2],
//     '6': [6.1, 6.3]
// }

// const groupBy = (arr, callbackFunction) => {
//     const result = {}
//     arr.forEach(item => {
//         let resultAfterCallback = callbackFunction(item)
//         result[resultAfterCallback].push(item)
//     })
//     console.log(result);
// }

// groupBy([6.1, 4.2, 6.3], Math.floor)




//another

// document.querySelector