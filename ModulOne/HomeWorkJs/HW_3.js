// 1
/*
 Создать функцию multiplyTable, которая принимает число n
 и выводит таблицу умножения для чисел от 1 до n. Используйте вложенные циклы для создания таблицы.

 Условия:

 - Функция должна принимать целое положительное число n.
 - Выводить таблицу умножения для чисел от 1 до n.

 Например multiplyTable(5);
    // Вывод:
    // 1 2 3 4 5
    // 2 4 6 8 10
    // 3 6 9 12 15
    // 4 8 12 16 20
    // 5 10 15 20 25
 */

function multiplyTable(n) {
   if (n >= 1) {
      for (let i = 1; i <= n; i += 1) {
         for (let j = 1; j <= n; j += 1) {
            console.log(`${i} x ${j} = ${i * j}`);
         }
      }
   } else {
      console.log(n);
   }
}
multiplyTable(9)

// 2
/*
  Создать функцию calculateFactorial, которая принимает число n
  и возвращает факториал этого числа. Факториал числа - это произведение всех положительных целых чисел от 1 до этого числа включительно.

  Условия:

  Функция должна принимать целое положительное число n.
  Факториал 0 и 1 равен 1.

  Например: calculateFactorial(5);
  // Вывод: 120 (1 * 2 * 3 * 4 * 5)
 */

function calculateFactorial(n) {
   let result = 1;
   if (n === 0 || n === 1) {
      return 1
   } else if (n > 1) {
      for (let i = 1; i < n; i++) {
         result *= i + 1
      }
      return result
   } else if (n < 0) {
      return -1
   }
}
console.log(calculateFactorial(-8))

//3
/*
 Создать функцию addWithLoss, которая принимает два числа
 и возвращает их сумму с потерей точности. Функция должна округлить результат сложения до определенного количества знаков после запятой.

 Условия:

 Функция должна принимать два числа.
 Опционально, функция может принимать третий параметр — количество знаков после запятой для округления результата (по умолчанию 1).
 Функция должна возвращать число

 Например:
 addWithLoss(0.1, 0.2);
 // Вывод: 0.3 (вместо ожидаемого 0.30000000000000004)

 addWithLoss(1.001, 2.002, 2);
 // Вывод: 3 (вместо ожидаемого 3.003)

*/
let addWithLoss = (num1, num2, numberСharacters) => +(num1 + num2).toFixed(numberСharacters)
console.log(addWithLoss(0.1, 0.2, 1))


//4

/*Создать функцию processText, которая принимает строку текста и выполняет следующие операции:

Удаление пробелов в начале и конце строки.
Преобразование текста в нижний регистр.
Замена всех символов "a" на символ "X".

Например:
processText("   Hello, World!   ");
// Вывод: "xello, world!"

processText("Another Example");
// Вывод: "xXother exXmple"

*/

let processText = (str) => str.trim().toLowerCase().replace(/a/ig, "X")
console.log(processText("Another Example"));

//5

/*Задача: Кодирование и декодирование строки
 Необходимо создать программу для кодирования и декодирования строк.
 Кодирование осуществляется следующим образом: каждый символ строки заменяется на его ASCII код (String.fromCharCode),
 затем к получившимся числам добавляется заданное число (назовем его "ключ").
 Декодирование, соответственно, происходит в обратном порядке.

 1. Напишите функцию encode_string(s, key), которая принимает на вход строку s и целое число key,
 и возвращает закодированную строку.

 Например:
 encode_string("Hello, World!", 5)
 вывод: "Mjqqt, 1twnl!"

 2. Напишите функцию decode_string(encoded_s, key),
 которая принимает закодированную строку и ключ, и возвращает декодированную строку.

 Например:
 decode_string("Mjqqt, 1twnl!", 5)
 вывод: "Hello, World!"

 */

function encodeString(encodeStr, key) {
   const notEncodeChar = [',', ' ', '!']
   let resultStr = '';
   let indexingCodeUnit = '';
   let stringCodeUnit = '';
   for (let char of encodeStr) {
      if (notEncodeChar.includes(char)) {
         resultStr += char
      } else {
         indexingCodeUnit = (char.charCodeAt() + key)
         stringCodeUnit = String.fromCharCode(indexingCodeUnit)
         resultStr += stringCodeUnit;
      }
   }
   return resultStr
}

console.log(encodeString("Hello, World!", 6))


function decodeString(decodeString, key) {
   const notEncodeChar = [',', ' ', '!']
   let resultStr = '';
   let indexingCodeUnit = '';
   let stringCodeUnit = '';
   for (let char of decodeString) {
      if (notEncodeChar.includes(char)) {
         resultStr += char
      } else {
         indexingCodeUnit = (char.charCodeAt() - key)
         stringCodeUnit = String.fromCharCode(indexingCodeUnit)
         resultStr += stringCodeUnit;
      }
   }
   return resultStr
}
console.log(decodeString("Nkrru, ]uxrj", 6))

