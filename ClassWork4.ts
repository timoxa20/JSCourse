const arr: number[] = [1, 2, 3, 4, 5];
const arr2: Array<number> = [1, 2, 3, 4, 5];

//Укажите значения, чтобы не было ошибок компиляции
const a1: number = 1;
const a2: boolean = true;
const a3: string = '1'
const a4: number[] = [1, 2, 3]
const a5: Array<string> = ['Home', 'Homic', 'Grid'];
const a6: [string] = ['Res'];
const a7: [boolean, number] = [true, 1];
const a8: [number[], Array<string>] = [[1, 2, 3], ['Home', 'Homic', 'Grid']]


const b1: number = 70;
const b2: boolean = false;
const b3: string = "lalaka";
const b4: [boolean,boolean] = [true, false];
const b6: [number, string] = [10, "10"];
const b7: boolean[] = [...[true]];
