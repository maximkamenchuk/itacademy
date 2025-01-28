//lesson12

//zadanie 1
// let str1 = 'Hello'
// let str2 = 'world'
// console.log(str1 + ", " + str2);



//zadanie 2
// let str = 'I learn computer science!'
// let str2 = str.replaceAll(' ', '_')
// console.log(str2);



//zadanie 3 
// let str = 'I learn computer science!'
// let str1 = str.length
// console.log(str1);



//zadanie 4 
// let min = prompt('Введите число от 0 до 59')
// if(min >= 0 && min <=15) {
//     result = ('Первая четверть часа')
// } else if(min >= 16 && min <= 30) {
//     result = ('Вторая четверть часа')
// } else if(min >= 31 && min <= 45) {
//     result = ('Третья четверть часа')
// } else if(min >= 46 && min <=59) {
//     result = ('Четвертая четверть часа')
// } else {
//     console.log('Неверный ввод данных');
// }
// console.log(result);



//zadanie 5 
// let language = prompt();
// let arr = language.split(' ')
// if (arr == 'Русский') {
//     console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
// } else if(arr == 'English') {
//     console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
// }



//------------------------------------------------------------------------------------------------------------------------------------------------------------


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

// ВАРИАНТ НА ЗАНЯТИИ 14 (ФУНКЦИЯ)
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




//-----------------------------------------------------------------------------------------------------------



//lesson14

//zadanie 1
// function isPrime(n) {
//     if (n <= 1) {
//       return false;         // 1 и числа меньше 1 не простые
//     } else if (n <= 3) {
//       return true;          // 2 и 3 простые
//     } else if (n % 2 === 0 || n % 3 === 0) {
//       return false;         // Делятся на 2 или 3
//     }

//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//           return false;         // Делится на i или i + 2
//       }
//     }
//     return true; // Возвращает 'true' простому числу после проверок
//   }
//   console.log(isPrime(997));


//zadanie 2
// function isPalindrome(str) {
//   const cleanedStr = str.toLowerCase();
//   const reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("level"));     // true
// console.log(isPalindrome("ШАЛАШ"));     // true
// console.log(isPalindrome('123321'));   //  true



//zadanie 3
// function uniqueCharacters(str) {
//     let charCount = {};
//     let uniqueChars = [];
//     for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//     }
//     for (let char in charCount) {
//         if (charCount[char] === 1) {
//             uniqueChars.push(char);
//         }
//     }
//     return uniqueChars;
// }
// console.log(uniqueCharacters('ШАЛАШ'));
// console.log(uniqueCharacters('ШИНШИЛЛА'));
// console.log(uniqueCharacters('1123443708'));



//zadanie 4
// function sumRange(start, end) {
//    if (start > end) {
//      return "Ошибка, начальное число должно быть меньше или равно конечному";
//    }

//    let sum = 0; //Обязательно let, т.к мы будет присваивать сумму данной переменной
//    for (let i = start; i <= end; i++) {
//      sum += i; 
//    }
//    return sum //Возвращает сумму значений, без этого ничего работать не будет
//  }
//  console.log(sumRange(1, 4));
//  console.log(sumRange(-3, 2));



//zadanie 5 

//см задачу 3 



//zadanie 6
// function processArray(n) {
//     if (n <= 0) {
//         console.log('Длина массива должна быть больше 0');
//         return;
//     }

//     let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
//     console.log('Сгенерированный массив:', arr);

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     let sum = arr.reduce((a, b) => a + b, 0);
//     let avg = sum / n;

//     console.log('Максимальное число:', max);
//     console.log('Минимальное число:', min);
//     console.log('Сумма всех чисел:', sum);
//     console.log('Среднее арифметическое:', avg);
// }
// let length = 10;
// processArray(length);



//zadanie 7

// function fibonacciArray(numMax) {
//     const arr = [0, 1];
//     for (let i = 2; i < numMax; i++) { 
//         const next = arr[i - 1] + arr[i - 2]; //Присваиваем текущему значению, сумму двух предыдущих
//         arr.push(next);
//     }
//     console.log(arr);
// }
// fibonacciArray(20);




// --------------------------------------------------------------------------------------------------------------------




// lesson 15


//zadanie 1
// const arr = [1, -3, 5, 8, 9, -10, 14, 16, -17];  // Создаем массив, заполняем различными цифрами
// function processArray(arr) {
//     const evenElements = arr.filter(x => x % 2 === 0); // Делаем элементы четными (фильтром)
//     const averageEven = evenElements.length > 0 ? evenElements.reduce((sum, x) => sum + x, 0) / evenElements.length : null; // Делаем среднее арифметическое через reduce, sum = аккумулятор

//     const nonNegativeElements = arr.filter(x => x >= 0);
  
//     const sumMultiplesOf3 = arr.filter(x => x % 3 === 0).reduce((sum, x) => sum + x, 0); // Если цифры кратны 3, суммируем их (reduce)
  
//     return {
//       averageEven,
//       nonNegativeElements,  //Можно не писать дважды, пример: averageEven: averageEven, (вместо этого JS позволяет написать 1 раз)
//       sumMultiplesOf3
//     }; // Возвращаем все нужные нам значения 
//   }
  
//   let results = processArray(arr); 
  
//   console.log('Исходный массив:', arr);
//   console.log('Среднее арифметическое четных элементов:', results.averageEven);
//   console.log('Массив без отрицательных чисел:', results.nonNegativeElements);
//   console.log('Сумма элементов, кратных 3:', results.sumMultiplesOf3);
  


//zadanie 2 
// function findClosestToAverage(arr) {
//     const sum = arr.reduce((acc, x) => acc + x, 0);
//     const average = sum / arr.length;
  
//     let closestElement = arr[0]; // Инициализируем первым элементом
//     let minSquaredDistance = (arr[0] - average) ** 2; // Квадрат расстояния до первого элемента
  
//     for (let i = 1; i < arr.length; i++) {
//       const currentSquaredDistance = (arr[i] - average) ** 2; // Квадрат расстояния до текущего элемента
//       if (currentSquaredDistance < minSquaredDistance) {
//         minSquaredDistance = currentSquaredDistance;
//         closestElement = arr[i];
//       }
//     }
//     return closestElement;
//   }
  
//   const numbers = [1, -3, 5, 8, 9, -10, 14, 16, 17]
//   console.log("Массив:", numbers);
//   console.log("Элемент, наиболее близкий к среднему:", findClosestToAverage(numbers));  


//zadanie 3 
// function sumBetweenZeros(arr) {
//     let firstZeroIndex = -1;
//     let lastZeroIndex = -1;

    
//     for (let i = 0; i < arr.length; i++) { // Находим индекс первого нуля
//         if (arr[i] === 0) {
//             firstZeroIndex = i;
//             break;
//         }
//     }


//     for (let i = arr.length - 1; i >= 0; i--) { // Находим индекс последнего нуля
//         if (arr[i] === 0) {
//             lastZeroIndex = i;
//             break;
//         }
//     }

//     let sum = 0;
//     for (let i = firstZeroIndex + 1; i < lastZeroIndex; i++) { // Вычисляем сумму элементов между первым и последним нулями
//         sum += arr[i];
//     }
//     return sum;
// }

// const numbers = [1, 2, 7, 0, 9, 4, -2, 0]
// console.log("Массив:", numbers);
// console.log("Сумма между нулями:", sumBetweenZeros(numbers)); 




//zadanie 4
// function shiftArrayRight(arr, n, fillValue = null) {
//     const len = arr.length;
//     const shift = n % len; // Учитываем случай, когда n > len (сдвиг не должен быть больше длины массива)
  
//     const shiftedArray = new Array(len); // Создаем новый массив той же длины
  
//     // Заполняем сдвинутыми элементами
//     for (let i = 0; i < len; i++) {
//       const newIndex = (i + shift) % len;
//       shiftedArray[newIndex] = arr[i];
//     }
  
//     // Заполняем пустые места (если они образовались из-за fillValue)
//     for(let i = 0; i < len; i++) {
//        if(shiftedArray[i] === undefined){
//           shiftedArray[i] = fillValue;
//        }
//     }
//     return shiftedArray;
// }
  
//   const numbers = [1, -3, 5, 8, 9, -10, 14, 16, -17] 
//   console.log("Исходный массив:", numbers);
//   console.log("Сдвиг на 2", shiftArrayRight(numbers, 2)); // Вывод: [null, null, 1, 2, 3]
  
 


//zadanie 5 
// function findMaxConsecutiveElements(arr) {
//     let maxCount = 0;   // Максимальная длина последовательности
//     let currentCount = 1; // Текущая длина последовательности

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] === arr[i - 1]) {
//         currentCount++;
//       } else {
//         if (currentCount > maxCount) { // Обновляем maxCount
//             maxCount = currentCount;
//         }
//         currentCount = 1;          // Сбрасываем currentCount
//       }
//     }

//     if (currentCount > maxCount) { // Проверяем последний отрезок
//       maxCount = currentCount;
//     }
//     return maxCount;
// }

// const numbers = [1, 1, 2, 2, 2, 3, 3, 3, 3];
// console.log("Массив:", numbers);
// console.log("Макс. количество подряд идущих:", findMaxConsecutiveElements(numbers));
