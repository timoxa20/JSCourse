function getTimeOfDay (time) {
    if(time<= 7) {
        return console.log("Утро")
    } else if( time <=12) {
        return console.log("День")
    } else if( time <=20) {
        return console.log("Вечер")
    } else  {
        return console.log("Вечер")
    }
}

getTimeOfDay (17)