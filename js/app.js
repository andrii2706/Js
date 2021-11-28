// - Знайти та вивести довижину настипних стрінгових значень
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'javascript is cool', 'lorem ipsum'
// const firstStr = 'hello world'
// const secondStr = 'javascript is cool'
// const thirdStr = 'lorem ipsum'
// - Перевести до нижнього регістру настипні стрінгові значення
// const thirdTask = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
//
// console.log(firstStr.length);
// console.log(secondStr.length);
// console.log(thirdStr.length);
//
// console.log('hello world'.toUpperCase());
// console.log('javascript is cool'.toUpperCase());
// console.log('lorem ipsum'.toUpperCase());
//
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('JAVASCRIPT IS COOL'.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// document.write(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
//
// function stringToarray(str){
//     let arrayOfStrings = str.split(' ');
// console.log(arrayOfStrings);
// }
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length) {
//     let arrayOfStrings = str.slice(0, length)
// document.writeln(arrayOfStrings);
//     console.log(arrayOfStrings);
// }
//
// delete_characters(str, 7);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// function insert_dash(someStr) {
//     let newArray = someStr.trim().toUpperCase().replace(/\s/g,'-').replace(/[^a-zA-Z0-9 -]/, ' ');
//     document.writeln(newArray)
//     console.log(newArray);
// } // 'HTML-JAVASCRIPT-PHP'
// insert_dash(str)
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// function toUp(str) {
//  return str.charAt(0).toUpperCase() + str.slice(1);
//
// }
// let info = 'hellloooooo'
// document.writeln(toUp(info));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//     function toUps(str) {
//         return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
//     }
// document.writeln(toUps('hello my friend'))
