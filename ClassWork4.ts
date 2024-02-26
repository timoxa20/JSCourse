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