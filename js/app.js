// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s (a, b){
//     let plocha = a*b;
//     return plocha
//
// }
// console.log(s(5,4));


////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle ( r){
//     const pi = 3.14;
//     let s = 2*pi + Math.pow(r,2);
//     return s
// }
// console.log(circle(10));


////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder(r, h) {
//     const pi = 3.14;
//     let s = 2*pi*r*h
//     return s
// }
// console.log(cylinder(4, 10));


////////////////////////////////////////////////////////////////////////////////////////////////////
// - створити функцію яка приймає масив та виводить кожен його елемент

// let someArr = [4, 'asd', 'qwe', 'vbn', 45, 85, 25]
// Варіант з  For Of
// function arr(tArr){
//     for (let item of tArr){
//         console.log(item);
//     }
// }
// arr(someArr);

// Другий Варіант розв'язку цієї задачі
// function arr(tArr){
//     for (i=0; i <tArr.length; i++){
//         console.log(tArr[i]);
//     }
// }
// arr(someArr);
///////////////////////////////////////////////////////////////////////////////////////////////

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     let modelOfText = document.write(`<div><p>${text}</p></div>`);
//     return modelOfText
// }
// console.log(paragraph('dgskfygsdkjfgsdjfgsdjkgfsdjlgfsdfglsdgfsdlugflsdugflsdgflsdgflsdgflsdgflsdgflsdgflsdgflgsdfjlgsdlfjg'));
///////////////////////////////////////////////////////////////////////////////////////////////


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// Перший варіант Розв'язку цієї  задачі.
// function markerList(info) {
//     let mList =  document.write(`<ul><li>${info}</li><li>${info}</li><li>${info}</li></ul>`)
//     return mList
// }
// console.log(markerList('sdjfsdkfsdklfjsdljflsdfjsdljflsdjflj'));


// Другий Варіант
// function markerList(info) {
//     for (i=0; i<3; i++){
//         document.write(`<ul><li>${info}</li></ul>`)
//     }
// }
// markerList('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function markerList(info, index) {
//     for (let i = 0; i < index; i++) {
//         document.write(`<ul><li>${info}</li></ul>`)
//     }
// }
// markerList('Hello', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = ['sdfnsdf', 555, true]
// function randomArg(someArr) {
//     for (let item of someArr){
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// }
// randomArg(arr)







// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let info = [
//     {id: 1, name: 'Vasya', age: 20},
//     {id: 2, name: 'Andrii', age: 21},
//     {id: 3, name: 'Sergii', age: 30},
// ]
//
// function strNumbBoolTypes(infoArr) {
//     for (let item of infoArr){
//         document.write(
//             `<div><ul><li>ID --- ${item.id}</li><li>Name ---${item.name}</li><li>Studing status ---${item.age}</li></ul></div>`
//         );
//     }
// }
// strNumbBoolTypes(info)


