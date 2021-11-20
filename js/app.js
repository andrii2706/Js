// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// const str = ['asd', 'qwe', 'dfg', 'vbn', 'zxc']
// console.log(str);
// const numb = [1, 2, 3, 4, 5];
// console.log(numb);
// const bool = [true, false, true, false, true]
// console.log(bool);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArr = []
//
// emptyArr[0] = 'qwe';
// emptyArr[1] = 'asd';
// emptyArr[2] = 'zxc';
// emptyArr[3] = 5;
// emptyArr[4] = true;
// emptyArr[5] = null;
// emptyArr[6] = 4545;
// emptyArr[7] = 'Hello';
//
// console.log(emptyArr);
//

//Другий метод
// const infoForEmptyArr = 'Hello'
// const infoForEmptyArr2 = 'asd'
// const infoForEmptyArr3 = 'qwe'
// const infoForEmptyArr4 = 'zxc'
// const infoForEmptyArr5 = 'vbn'
// const infoForEmptyArr6 = 'mvbn'
//
// emptyArr.push(infoForEmptyArr,infoForEmptyArr2,infoForEmptyArr3,infoForEmptyArr4,infoForEmptyArr5,infoForEmptyArr6 )


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (i=0; i< 10; i++){
//     document.write(`<div>1</div>`)
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (i=1; i<11; i++){
//     document.write(`<div>${i} --- Ідентифікатор</div>`);
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
// document.write(`<div>20 блоків</div>`);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 1;
// while (i < 21) {
// document.write(`<div>${i} --- блок</div>`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let numb = [1, 4, 5, 6, 8, 6, 7, 8, 45, 42];
// for(i = 0;i < numb.length; i++)
//     console.log(numb[i]);


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let an = ['klsdmfmkl', 'lkmdslmsd;f','lsdf;fl;sdf','dslkmf;dsfm;sdf','sdasddfasdf','sd;fms;dfm','dfsdklsd','sjndfjnsdfkl','ldknsdld','ds dd ns,df n']
// for(i = 0; i < an.length; i++)
// console.log(an[i]);


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mas = [ true, false, 1, 2,3,4,'Andrii','Oleg','John' ,'Ihor' ,];
// for(i = 0; i < mas.length; i++);
// console.log(mas[i]);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


// let mas = [ true, false, 1, 2,3,4,'Andrii','Oleg','John' ,'Ihor' ,];
//
// for(let itemOfMas of mas){
//     if (typeof itemOfMas === 'boolean'){
//         console.log(itemOfMas);
//     }
// }
// for (let itemsOfMas of mas){
//     if (typeof itemsOfMas === 'number'){
//         console.log(itemsOfMas);
//     }
// }
// for (let itemsOfMas of mas){
//     if (typeof itemsOfMas === 'string'){
//         console.log(itemsOfMas);
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = "hello";
// arr[9] = typeof true;
// arr[8] = false;
// arr[5] = 33.441;
// arr[4] = 876;
// arr[1] = "khgd4";
// arr[2] = true;
// arr[3] = false;
// arr[6] = 7854534534;
// arr[7] = 876;
// for (i=0; i< arr.length; i++){
//     console.log(arr[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i=1; i<10; i++){
//     console.log(i);
//     document.write(i);
// }

// for (i=1; i< 100; i++){
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }
// for (i=2; i< 100; i++ ){
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i=0; i<100; i++){
//     if (i%2===0){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

// for (i=0; i< 100; i++){
//     if (i%2===1){
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }


