//1
/*
const students = [
  { name: 'Alice', grades: [85, 90, 92] },
  { name: 'Bob', grades: [78, 80, 75] },
  { name: 'Charlie', grades: [90, 92, 88] },
  { name: 'Anna', grades: [99, 60, 83] },
  { name: 'George', grades: [77, 82, 77] },
  { name: 'Nick', grades: [70, 90, 83] },
];

У вас есть массив `students`, представляющий информацию о студентах.
Каждый элемент массива - объект с полями `name` (имя студента) и `grades` (массив оценок студента).

1. Найдите средний балл каждого студента и добавьте его в объект в виде нового свойства `averageGrade`.
2. Отсортируйте студентов по среднему баллу в убывающем порядке.
3. Используя метод массива, создайте новый массив `topStudents`, содержащий 3 студентов с самыми высокими средними баллами.
*/

const students = [
  { name: 'Alice', grades: [85, 90, 92] },
  { name: 'Bob', grades: [78, 80, 75] },
  { name: 'Charlie', grades: [90, 92, 88] },
  { name: 'Anna', grades: [99, 60, 83] },
  { name: 'George', grades: [77, 82, 77] },
  { name: 'Nick', grades: [70, 90, 83] },
];

const addAverageGrade = students.map(element => {
  return element.averageGrade = element.grades.reduce((total, count) => (total + count) / element.grades.length)
})
const sortStudentsAverageGrade = students.sort((a, b) => a.averageGrade - b.averageGrade)
const topStudents = [...sortStudentsAverageGrade].splice(-3)

console.log(students)
console.log(sortStudentsAverageGrade)
console.log(topStudents)

//2
/*
Давайте создадим собственный кастомный метод массива с именем findAndPush,
который будет выполнять аналогичные действия методам find и push.
Этот метод будет искать заданный элемент в массиве и, если найден, перемещать его в конец массива.
Метод будет возвращать true в случае успешной операции и false в противном случае

Условие: нельзя использовать find и push, любые другие методы можно

Array.prototype.findAndPush = function (searchElement) {// <--- практическое применение прототипа - мы можем создавать свое
 // ваш код
};

// Пример использования
const myArray = [1, 2, 3, 4, 5];

const result = myArray.findAndPush(3);

console.log(result); // true, так как 3 был найден и перемещен
console.log(myArray); // [1, 2, 4, 5, 3]
*/
const myArray = [1, 2, 3, 4, 5]
Array.prototype.findAndPush = function(searchElement) {
  let removeSearchElement = this.filter(element => element !== searchElement)
  let newArray = [...removeSearchElement, searchElement]
  return newArray.includes(searchElement)
}

const result = myArray.findAndPush(3)
console.log(result)

//3
/*Создайте функцию, которая принимает две даты в формате объекта `Date`
и возвращает разницу между ними в виде объекта с полями `years`, `months`, `days`, `hours`, `minutes`, `seconds`.

function dateDifference(date1, date2) {
  // Ваш код здесь
}

// Пример использования:
const startDate = new Date(2023, 0, 1, 12, 0, 0); // 1 января 2023 года, 12:00:00
const endDate = new Date(2024, 5, 15, 18, 30, 45); // 15 июня 2024 года, 18:30:45

const difference = dateDifference(startDate, endDate);
console.log(difference);
//{
//  years: 1,
//  months: 5,
//  days: 14,
//  hours: 6,
//  minutes: 30,
//  seconds: 45
//}

Подсказка:
    - Используйте методы объекта `Date` для получения разных компонент времени (год, месяц, день, час, минута, секунда).
    - Учтите, что разница в месяцах может быть нецелым числом, поэтому нужно корректно обработать этот случай.
*/

const startDate = new Date(2023, 0, 1, 23, 0, 0); // 1 января 2023 года, 12:00:00
const endDate = new Date(2024, 5, 15, 18, 30, 45); // 15 июня 2024 года, 18:30:45

function dateDifference(date1, date2) {
  let differenceFullYear = date2.getFullYear() - date1.getFullYear();
  let differenceMonth = date2.getMonth() - date1.getMonth();
  let differenceDay = date2.getDate() - date1.getDate();
  let differenceHours = date2.getHours() - date1.getHours();
  let differenceMinutes = date2.getMinutes() - date1.getMinutes();
  let differenceSeconds = date2.getSeconds() - date1.getSeconds();
  if (differenceSeconds < 0) {
    differenceMinutes--;
    differenceSeconds += 60;
  }
  if (differenceMinutes < 0) {
    differenceHours--;
    differenceMinutes += 60;
  }
  if (differenceHours < 0) {
    differenceDay--;
    differenceHours += 24;
  }
  if (differenceDay < 0) {
    differenceMonth--;
    const prevMonthLastDay = new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    differenceDay += prevMonthLastDay;
  }
  if (differenceMonth < 0) {
    differenceFullYear--;
    differenceMonth += 12;
  }
  const result = `{
    years: ${differenceFullYear},
    months: ${differenceMonth},
    days: ${differenceDay},
    hours: ${differenceHours},
    minutes: ${differenceMinutes},
    seconds: ${differenceSeconds}
  }`
  return result
}

const difference = dateDifference(startDate, endDate);
console.log(difference)

//4
/*Создайте функцию, которая принимает объект с информацией о студенте и использует деструктуризацию
для извлечения различных данных. Затем выведите эти данные в виде строки.

function printStudentInfo(student) {
  // Ваш код здесь
}

// Пример использования:
const student = {
  name: 'Alice',
  age: 20,
  grade: 'A',
  address: {
    city: 'New York',
    zip: '10001',
  },
  hobbies: ['reading', 'traveling'],
};

printStudentInfo(student);
// Вывод должен быть в формате:
// "Student: Alice, Age: 20, Grade: A, City: New York, Zip: 10001, Hobbies: reading, traveling"
```

Подсказка:
- Используйте деструктуризацию для извлечения данных из объекта студента.
- Можете использовать шаблонные строки для формирования вывода.
 */

const student = {
  name: 'Alice',
  age: 20,
  grade: 'A',
  address: {
    city: 'New York',
    zip: '10001',
  },
  hobbies: ['reading', 'traveling'],
};

function printStudentInfo(student) {
  let { name, age, grade, address: { city, zip }, hobbies: [hobbies1, hobbies2] } = student
  return `
  Student: ${name}, 
  Age: ${age}, 
  Grade: ${grade},
  City: ${city}, 
  Zip: ${zip}, 
  Hobbies: ${hobbies1}, ${hobbies2}`
}

console.log( printStudentInfo(student) )



//5
/*
Вот ваша первая задача из первой домашки:
const user = {
    name: "Boris",
    age: 24
}

// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

В основном вы ее делали так:
user.firstName = user.name
delete user.name

По итогу у вас получался объект следующего вида:

const user = {
    age: 24
    firstName: "Boris",
}

Внимание, задача: создать новый объект newUser (программно), чтобы на выходе получилось следующее:

const user = {
    name: "Boris",
    age: 24
}

csonst newUser = ...// ваш код

console.log(newUser) // {firstName: "Boris", age: 24}

*/

const user = {
  name: "Boris",
  age: 24
}

const {name:firstName, age} = user;
const newUser = {firstName, age}

console.log(newUser) // {firstName: "Boris", age: 24}
