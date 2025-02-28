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
//   const cleanedStr = str
//     .toLowerCase()
//     .replace(/[^a-zA-Zа-яА-Я0-9]/g, "")
//   const reversedStr = cleanedStr.split("").reverse().join("");
//   return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("ШАЛАШ")); // true
// console.log(isPalindrome("123321")); //  true
// console.log(isPalindrome("У скал плакса ласкал плаксу")); // true

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
