// 1

const user = {
    name: "Boris",
    age: 24,
}


function changingKey(obj, newKey, numbersArray) {
    const transformationObj = Object.entries(obj).map(([key, value]) => [key, value])
    transformationObj[numbersArray].splice(0, 1)
    transformationObj[numbersArray].unshift(newKey)
    newKey = Object.fromEntries(transformationObj)
    return newKey
}
console.log(changingKey(user, 'firstName', 0))
// переделайте объект таким образом, чтобы у него было 2 ключа: firstName и age

// 2
const fruitContainer = []
fruitContainer.push('Банан', 'Яблоко', 'Персик')
fruitContainer[1] = 'Виноград'
console.log(fruitContainer)

// Добавьте 3 фрукта в массив fruitContainer
// Измените название второго фрукта

// 3
/*
 Вам нужно создать программу на языке JavaScript для расчета бонусов сотрудникам
 в зависимости от их стажа и производительности. 
 Используйте операторы и условные конструкции для выполнения задачи.

 Определение переменных:
 - Объявите переменную yearsOfService и присвойте ей значение, представляющее стаж сотрудника в годах 
 (например, 5).
 - Объявите переменную performanceRating и присвойте ей значение от 1 до 5, 
 представляющее оценку производительности сотрудника.

 Расчет бонуса:
 На основе стажа и оценки производительности рассчитайте бонус сотрудника. Используйте следующие правила:
   - Если стаж меньше 5 лет, и оценка производительности 4 или 5, бонус составляет 5% от заработной платы.
   -  Если стаж 5 лет или более, и оценка производительности 4 или 5, бонус составляет 10% от заработной платы.
   - В остальных случаях бонуса нет.

 Вывод результатов:
 Выведите результат расчета бонуса с использованием функции console.log. Если бонуса нет, выведите сообщение о том, что сотрудник не получает бонус.
 На основе всех переменных создайте объект employeeInfo с полученными переменными в виде значений
 */
const yearsOfService = 7;
const performanceRating = 4;
const conditionPerformanceRating = 4 || 5;
const employeeInfo = {
    keyYearsOfService: yearsOfService,
    keyPerformanceRating: performanceRating,
};




if (yearsOfService < 5 && conditionPerformanceRating) {
    console.log('Ваш бонус составляет 5% от заработной платы')
} else if (yearsOfService > 5 && conditionPerformanceRating) {
    console.log('Ваш бонус составляет 10% от заработной платы')
} else {
    console.log('Бонусов нет')
}



// 4
const userData = {
    name: "Victor",
    age: 31,
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'Stateville',
        zipCode: '12345'
    }
}

const userData2 = {
    name: "Vlad",
    age: "31",
    address: {
        street: '456 Oak Avenue',
        city: 'Townsville',
        state: 'Stateland',
        zipCode: null
    }
}

const data = [userData, userData2]


if (data[2]) {
    console.log("1")
} else if (data[0].age === data[1].age && !(typeof data[0].name !== "string" || typeof data[1].address.zipCode)) {
    console.log("2")
} else if (typeof data[0].name === "string" && +data[1].age <= 0) {
    console.log("3")
} else if (typeof data[1].address["zipCode"] === "object") {
    console.log("4")
} else {
    console.log("5")
}

// Выведенно будет 4 как минимум отому что я запустил код  
// 1) data[2] не сработает потому что в массиве начинаеться отчёт с 0 тоесть userData = 0, userData2 = 1
// третьего элемента в массиве нету
// 2) Условие не сработает потому что "&&" запинаеться на лжи  все аргументы должны быть tru первое же 
// выражение равно false "data[0].age === data[1].age" а так как у && приоритет выше чем у "||" то 
// && выполнеться первее 
// 3) Влевой части typeof data[0].name === "string" 
// typeof определяет тип парамерта на строгое сравнение параметр = "string" который и 
// являеться typeof data[0].name
// чуть дальше по коду  выполняеться +data[1].age <= 0 унарный плюс выпониться первым и привидет строку к числу
// потом выполниться сравнение и так как 31 не меньше или равно нулю будет в этом случае false 
// и так как  && нужно что вы с обоих случаях было tru она не сработает  
// 4) Результат typeof null == "object" – это официально признанная ошибка в языке, которая сохраняется для совместимости.
//  На самом деле null – это не объект, а отдельный тип данных.
// а до 5 не дойдет

// Что будет выведено в консоли и почему

// 5
/*
   Выбор языка программирования
   * Объявите переменную `programmingLanguage` и присвойте ей строковое значение,
    представляющее предпочтительный язык программирования (например, "JavaScript", "Python", "Java", "C++").

   * Используя оператор `switch`, напишите код, который выводит сообщение о том, почему выбранный язык программирования является отличным выбором. Например:
     - Если `programmingLanguage` равен "JavaScript", выведите "JavaScript - отличный выбор для веб-разработки!"
     - Если `programmingLanguage` равен "Python", выведите "Python - мощный и удобный язык для разработки."
     - Если `programmingLanguage` равен "Java", выведите "Java - популярный язык для разработки кросс-платформенных приложений."
     - Если `programmingLanguage` равен "C++", выведите "C++ - язык с высокой производительностью и возможностями низкоуровневого программирования."
     - Добавьте обработку для случая, когда `programmingLanguage` не соответствует ни одному из вышеперечисленных вариантов.

     

   * Вывод результатов:
    - Выведите сообщение о выборе языка программирования с использованием `console.log`.
 */

const programmingLanguage = "JavaScript";

switch (programmingLanguage) {
    case "JavaScript":
        console.log("JavaScript - отличный выбор для веб-разработки!");
        break;
    case "Python":
        console.log("Python - мощный и удобный язык для разработки.");
        break;
    case "Java":
        console.log("Java - популярный язык для разработки кросс-платформенных приложений.");
        break;
    case "C++":
        console.log("C++ - язык с высокой производительностью и возможностями низкоуровневого программирования.");
        break;
    default:
        ("К сожалению нет такого языка в списке")
}
