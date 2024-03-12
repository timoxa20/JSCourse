function getsortString(str) {
    if (typeof str === 'string') {
        const regex = /[^\w\s]|_/g;
        return str.replace(regex, '').replaceAll(' ', '').toLowerCase()
    }


}
// 1. Напишите функцию, которая принимает в себя строку в виде аргумента и возвращает true,
//  если функции палиндром. Палиндром - строка, которая читается с конца так же, как и с начала. 
//  Условие - должны учитываться только буквы без знаков препинания. 
// f("tenet") // true
// f("tenet!") // true

function checkStringByCylinder(str) {
    let lineReversal = '';
    str = getsortString(str)
    lineReversal = str.split('').reverse().join('')
    return str === lineReversal
}

console.log(checkStringByCylinder('A man, a plan, a canal, Panama!'))


// 2. Напишите функцию, принимающую строку и возвращающую самое длинное слово в строке
// f('Web Development Tutorial'); // "Development"


function getLongWord(str) {
    let maxNum = 0;
    let result = [];
    const arrOfWords = str.replace(/,/g, '').split(' ');
    const arrOfLengths = arrOfWords.map(item => item.length);
    maxNum = Math.max(...arrOfLengths);
    arrOfWords.filter((item) => {
        if (item.length === maxNum) {
            result.push(item)
        };
    });
    return result.join(',');
}

console.log(getLongWord('The quick, brown'))


// 3. Напишите функцию, принимающую аргумент в виде строки и которая расставляет все буквы строки в алфавитном
//  порядке. Возвращает новую строку с буквами в алфавитном порядке
// f("alphabetical"); // "aaabcehillpt"


function getSortString(str) {
    let iteratingOverLine = [];
    let returnSortedLine = '';
    str = getsortString(str)
    for (let char of str) {
        iteratingOverLine.push(char)
    }
    returnSortedLine = iteratingOverLine.sort().join()
    return returnSortedLine.replace(/,/g, '')
}

console.log(getSortString('alphab,etical!'))


// 4. Напишите функцию JavaScript, которая принимает строку и возвращает индекс первого
// неповторяющегося символа.
//     f('фывфавыапрс'); // 8


function getIndexOfNonRepeatingValue(str) {
    const returnLowerCaseString = str.replace(/,/g, '').toLowerCase()
    for (let i = 0; i < returnLowerCaseString.length; i++) {
        const indexingString = returnLowerCaseString.charAt(i);
        const leftString = returnLowerCaseString.indexOf(indexingString);
        const rightString = returnLowerCaseString.lastIndexOf(indexingString);
        if (leftString === rightString) {
            return leftString;
        }
    }
    return null;
}

console.log(getIndexOfNonRepeatingValue('фывфавыапрс'))


// 5. Напишите функцию, которая принимает строку в качестве параметра и возвращает количество гласных в строке.
//     f('Web Development Tutorial')); //9

function getNumberVowelsString(str) {
    const vowels = /[aeiou]/gi;
    let result = str.matchAll(vowels);
    return result = Array.from(result).length;
}

console.log(getNumberVowelsString('Web Development, Tutorial'))