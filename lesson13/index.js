// let i = 0 

// while (i < 5) {
//     alert(i)
//     i++
// }


// do {
//     alert(i)
//     i++;
// } while (i < 5);


// for (let i = 0; i < 5; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// const arr = [344,63,743,425,6336,112,921,535]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1])  {
//            const temp = arr[j];
//            arr[j] = arr[j+1];
//            arr[j + 1] = temp;
//         }
//     }
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
    // if (arr[i] % 2 == 0 && [i] % 2 !== 0) {
    //     console.log(arr[i]);
    // }
//     console.log('*2', arr[i] *2);
//     console.log('*3', arr[i] *3);
//     if ((arr [i] * 3) % 6 == 0) {
//         console.log('continue');
//         continue;
//     }
//     console.log(arr[i] *4);
//     console.log('------------');
// }

// for (const i in arr) {
//     console.log(i, arr[i]);
    
// }

// for (const el of arr) {
//     console.log(el);
     


 // ОБЪЕКТЫ 

// const obj = {
//     name: 'maksim'
// }
// obj.age = 100;
// obj.name = 'ololo'
// console.log(obj);

// const cat = {
//     kittens: ['Беляш', 'Михаил', 'Чарли'],
//     favoriteToy: {
//     name: 'мячик',
//     size: 'маленький',
//     },
// }

// const cat2 = Object.create(cat)
// cat2.kittens = ['Чебурек', 'Максим', 'Шарик']
// console.log(cat2);
// console.log(cat2.kittens);

// const keys = Object.keys(cat)
// console.log(keys);

// const values = Object.values(cat)
// console.log(values);

// const entries = Object.entries(cat)
// console.log(entries);



// const person = {
//     name: "John Doe",
//     age: 30,
//     gender:'male'
// };

// const person2 = person;

// console.log('person', person);
// console.log('person2', person2);

// person.age = 33;
// person.name = "Jane Doe"

// console.log('person', person);
// console.log('person2', person2);

// const person3 = Object.assign({}, person)
// person3.name = 'ahfhshaffahsfghasfha'
// console.log('person3', person3);
// console.log('person', person);
// console.log('person2', person2);

// const person4 = Object.freeze(person);
// person4.name = 'LOL'
// console.log('person', person);
// console.log('person4', person4);



