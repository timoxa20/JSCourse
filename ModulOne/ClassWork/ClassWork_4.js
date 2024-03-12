// Создайте функцию, которая выводит среднее арифметическое
// всех числовых значений объекта и выводит результат в консоль
const person = {
    name: "Pete",
    age: 24,
    salary: 2550,
    street: "Some street",
    houseNum: 52
}
function getCharResult() {
    let result = 0;
    let count = 0
    for (let char in person) {
        if (typeof person[char] === 'number') {
            result += person[char]
            count++
        } else {
            continue
        }
    }
    return result / count

}
console.log(getCharResult())





/*
//TODO: максимально часто встречающаяся задача на фронте

Необходимо создать функцию formatDate,
которая принимает объект Date и возвращает строку с отформатированной датой в следующем виде: "DD.MM.YYYY, HH:mm:ss".

1. Создайте функцию formatDate, которая принимает параметр date - объект Date.
2. Используя методы объекта Date, получите значения года, месяца, дня, часа, минут и секунд.
3. Добавьте ведущий ноль к значениям, если они состоят из одной цифры.
4. Сформируйте строку в формате "DD.MM.YYYY, HH:mm:ss".
5. Верните отформатированную строку.

Пример использования:

const currentDate = new Date();
const formattedDate = formatDate(currentDate);

Подсказка: Месяцы начинаются с нуля
*/

function formatDate(data) {
    const currentDate = data;
    const day = currentDate.getDate()
    const month = currentDate.getMonth()
    const fullYear = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const formatedDay = (day < 10) ? '0' + day : day
    const formatedMonth = (month < 10) ? '0' + month : month
    const formatedHours = (hours < 10) ? '0' + hours : hours
    const formatedMinutes = (minutes < 10) ? '0' + minutes : minutes
    const formatedSeconds = (seconds < 10) ? '0' + seconds : seconds
    const showData = formatedDay + ':' +
        formatedMonth + ':' +
        fullYear + ', ' +
        formatedHours + ':' +
        formatedMinutes + ':' +
        formatedSeconds
    return showData
}

console.log(formatDate(new Date()))

/*
Напишите кастомный Object.assign,
который принимает на вход целевой объект для копирования и копируемый объект и возвращает целевой
    function customAssign(target, source) {
        //code
        return target
    }
 */

const userOne = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const userTwo = {
    num: 2,
    nameUser: "Ervin Howell",
}

function customAssign(target, source) {
    let lengthObjSours = Object.values(source).length
    const mergeObj = Object.assign(target, source)
    const arrayObj = Object.entries(mergeObj)
    Object.fromEntries(arrayObj.splice(-lengthObjSours, lengthObjSours))
    target = arrayObj
    return target
}

console.log(customAssign(userOne, userTwo))