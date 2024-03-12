// 1)
function getTimeOfDay(time) {
    switch (time) {
        case (time >= 5 || time <= 10):
            return console.log("Утро")
            break
        case (time > 10 || time <= 16):
            return console.log("День")
            break
        case (time > 16 || time <= 21):
            return console.log("Вечер")
            break
        case (time > 21 || time < 5):
            return console.log("Ночь")
            break
        default:
            return console.log("Нет такого значения")
    }
}

getTimeOfDay(265)
// 2)
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        break
    }
    console.log(i)
}

let getNumber = 0;
while (getNumber <= 20) {
    getNumber++
    if (getNumber % 2 == 0 && (getNumber / 5) % 2 !== 0) console.log(getNumber)
}
// 3)
function formatPhoneNumber(str) {
    return '(' + str.slice(0, 3) + ')' + ' ' + str.slice(3, 6) + '-' + str.slice(6, str.length)

}
console.log(formatPhoneNumber("1234567890"))

