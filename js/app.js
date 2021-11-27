// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a,b) => a*b
// console.log(s(5,4));
// let pi = 3.14


// - створити функцію яка обчислює та повертає площу кола
// let  s = (r) => 2*pi+Math.pow(r,2);
// console.log(s(5));


// - створити функцію яка обчислює та повертає площу циліндру
// s =(r,h)=>2*pi*r*h
// console.log(s(5,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let someArr = [4, 'asd', 'qwe', 'vbn', 45, 85, 25]
//
// arr = (items) => {
//     for(let item of items){
//         console.log(item);
//     }
// }
// arr(someArr);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// p =(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// p('sjkfnsdjkfnsdjknfjksdnf;kjdnf;kjnsd;jkfnsd;knfsd;jknfdkjn');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// ul = (item) =>{
//     for (let i=0;i< 3 ; i++){
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// }
// ul('qwe')
//
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// ul=(item, index)=>{
//     for (let i=0;i< index ; i++){
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// }
// ul('qweasd',10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// list =(someArr)=>{
//     for (let item of someArr){
//         document.write(`<ul><li>${someArr}</li></ul>`)
//     }
// }
// let arr = ['sdfnsdf', 555, true]
// list(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let info = [
//     {id: 1, name: 'Vasya', age: 20},
//     {id: 2, name: 'Andrii', age: 21},
//     {id: 3, name: 'Sergii', age: 30},
// ]
//
// user = (infoArr) => {
//     for (let item of infoArr) {
//         document.write(`<ul>
// <li>Id--- ${item.id}</li>
// <li>Id--- ${item.name}</li>
// <li>Id--- ${item.age}</li>
// </ul>`)
//     }
// }
// user(info)
