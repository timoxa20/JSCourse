//1

interface UserData {
    name: string;
    age: number;
    address: Address;
}

interface Address {
    street: string;
    apartments: number;
    zCode: number;
}

// с помощью утилит типов и пересечения типов

type VillageAddress = Address & { village: string }; // <----  создайте тип, состоящий из интерфейса Address и дополнительного поля village: string
type PrivateHouseAddress = Omit<Address, 'apartments'> & { houseNum: number }; // <----  создайте тип, состоящий из интерфейса Address, в котором нет свойства apartments, но есть свойство houseNum: number
type UserName = Pick<UserData, 'name'>; // <--------- создайте тип, состоящий из интерфейса UserData, со всеми исключенными полями, кроме name

//ВНИМАНИЕ: утилиты типов не должны повторяться

//2
/*
 Напишите универсальную (дженерик) функцию mergeObjects, которая принимает два объекта и объединяет их в один новый объект,
 сохраняя типы свойств. Функция должна обрабатывать объекты с разными наборами свойств.

 Например:
 const obj1 = { name: 'John', age: 30 };
 const obj2 = { city: 'New York', job: 'Developer' };

 const mergedObj = mergeObjects(obj1, obj2);

// Ожидаем, что mergedObj будет иметь тип { name: string, age: number, city: string, job: string }

 function mergeObjects<T, U>(obj1: T, obj2: U): return type {
  // реализация функции
 }

*/ 
const obj1 = { name: 'John', age: 30 };
 const obj2 = { city: 'New York', job: 'Developer' };


function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const mergedObj = mergeObjects(obj1, obj2);