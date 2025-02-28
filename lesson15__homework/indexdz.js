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
//   const firstZeroIndex = arr.indexOf(0);
//   const lastZeroIndex = arr.lastIndexOf(0);

//   if (
//     firstZeroIndex === -1 ||
//     lastZeroIndex === -1 ||
//     firstZeroIndex >= lastZeroIndex
//   ) {
//     return 0;
//   }

//   let sum = 0;
//   for (let i = firstZeroIndex + 1; i < lastZeroIndex; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const numbers = [1, 2, 7, 0, 9, 4, -2, 0];
// console.log("Массив:", numbers);
// console.log("Сумма между нулями:", sumBetweenZeros(numbers));

// const numbers3 = [0, 1, 2, 3, 0];
// console.log("Массив:", numbers3);
// console.log("Сумма между нулями:", sumBetweenZeros(numbers3)); // 6

// zadanie 4
// function shiftArrayRight(arr, n, fillValue = null) {
//     const len = arr.length;
//     const shift = n % len;

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
//   console.log("Сдвиг на 12", shiftArrayRight(numbers, 12)); // Вывод: [null, null, 1, 2, 3]

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
