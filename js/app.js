// alert('22')

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let hello = 'hello';
// let owu = 'owu';
// let com = 'com';
// let ua = 'ua';
// let number1 = 1;
// let number10 = 10;
// let number999 = -999;
// let number123 = 123;
// let numberPI = 3.14;
// let exponent = 2.7;
// let number = 16;
// let firstboolean = true;
// let secondboolean= false;
// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(number1);
// console.log(number10);
// console.log(number999);
// console.log(number123);
// console.log(numberPI);
// console.log(exponent);
// console.log(number);
// console.log(firstboolean);
// console.log(secondboolean);
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(number1);
// alert(number10);
// alert(number999);
// alert(number123);
// alert(numberPI);
// alert(exponent);
// alert(number);
// alert(firstboolean);
// alert(secondboolean);
// document.write(`<div>${hello}</div>`);
// document.write(`<div>${owu}</div>`);
// document.write(`<div>${com}</div>`);
// document.write(`<div>${ua}</div>`);
// document.write(`<div>${number}</div>`);
// document.write(`<div>${number1}</div>`);
// document.write(`<div>${number10}</div>`);
// document.write(`<div>${number999}</div>`);
// document.write(`<div>${number123}</div>`);
// document.write(`<div>${numberPI}</div>`);
// document.write(`<div>${secondboolean}</div>`);
// document.write(`<div>${firstboolean}</div>`);
// document.write(`<div>${exponent}</div>`);

//- Переприсвоїти кожній змінній з завдання значення на довільне.
// hello = 'Owu';
// owu = 'Hello';
// com = 'ua';
// ua = ';';
// number = 'qwert';
// number123 = 'asdf';
// numberPI = 'sdf';
// number999 = 'vbn';
// number1 = 'qwe';
// number10 = 'asd';
// exponent = '5468';
// firstboolean = false;
// secondboolean = true;

// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(number1);
// console.log(number10);
// console.log(number999);
// console.log(number123);
// console.log(numberPI);
// console.log(exponent);
// console.log(number);
// console.log(firstboolean);
// console.log(secondboolean);
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(number1);
// alert(number10);
// alert(number999);
// alert(number123);
// alert(numberPI);
// alert(exponent);
// alert(number);
// alert(firstboolean);
// alert(secondboolean);
// document.write(`<div>${hello}</div>`);
// document.write(`<div>${owu}</div>`);
// document.write(`<div>${com}</div>`);
// document.write(`<div>${ua}</div>`);
// document.write(`<div>${number}</div>`);
// document.write(`<div>${number1}</div>`);
// document.write(`<div>${number10}</div>`);
// document.write(`<div>${number999}</div>`);
// document.write(`<div>${number123}</div>`);
// document.write(`<div>${numberPI}</div>`);
// document.write(`<div>${secondboolean}</div>`);
// document.write(`<div>${firstboolean}</div>`);
// document.write(`<div>${exponent}</div>`);

//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = 'Andrii';
// let LastName = 'Paslavskyi'
// let MiddleName = 'Volodumurovych'
//
// const person = firstName+ ' ' + LastName+ ' ' + MiddleName;
// console.log(person);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = prompt('Your name');
// let secondName = prompt('Your SecondName');
// let yourAge = +prompt('How old are you?')
// console.log(`Your name - ${firstName}`);
// console.log(`Your SecondName - ${secondName}`);
// console.log(`Your Age - ${yourAge}`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
// let a  = 100 ;
// console.log(typeof a);
// let  b  = '100';
// console.log(typeof  b);
// let  c = true;
// console.log(typeof c);

//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
// const xxx = 5 < 6;
// const fff = 5 > 6;
// const lll = 5 === 6;
// const kkk = 5 == 6;
// const mmm = 10=== 10;
// const nnn = 10 == 10;
// const yyy = 10 > 10;
// const ttt = 10 < 10;
// const rrr = 10 !== 10;
// const ddd = 123 > '123';
// const www = 123 == '123';
// console.log(www);
// console.log(ddd);
// console.log(xxx);
// console.log(fff);
// console.log(lll);
// console.log(kkk);
// console.log(mmm);
// console.log(nnn);
// console.log(yyy);
// console.log(ttt);
// console.log(rrr);


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// в фукція document.write(str + a + "<br/>"); поверне нам  205  тому, що чило  розглядається як стрінгове значення
//document.write(str - a + "<br/>"); поверне нам 15 тому, що число розглядається як стрінгове значення

// document.write(str * "2" + "<br/>");поверне нам 40 тому, що число розглядається як стрінгове значення

// document.write(str / 2 + "<br/>");поверне нам 10 тому,що число розглядається як стрінгове значення
