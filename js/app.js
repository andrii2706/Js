// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('First Number');
// let b = +prompt('Second Number');
//
// if (a > b) {
//     console.log('Okay a > b');
// } else if (b > a) {
//     console.log('Okay b > a');
// } else if (a === b) {
//     console.log('Okay a === b');
// }


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let house = +prompt('Введіть будь ласка номер квартири');
//
// if (house >= 1 && house <=20){
//     console.log('Квартира знаходиться в першому підїзді');
// }else if (house >=21 && house <=48){
//     console.log('Кватира знаходиться в другому підїзді');
// }else if (house >= 49 && house <=90){
//     console.log('Кватира знаходиться в третьому підїзді');
// }else if (house >=91){
//     console.error('В цьому будинку нема такої квартири');
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Number');
// if (number === 10){
//     console.log('Вірно');
// }else if (number !== 10 ){
//     console.error('НЕВІРНО');
// }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let something = typeof 5
if (something === typeof Number){
    console.log(1);
}else if (something === typeof Boolean ){
    console.log(2);
}else if (something === typeof String ){
    console.log(3);
}else if (something === typeof Array || something  ===typeof  Object ){
    console.log(4);
}else if (something ===typeof  undefined || something ===typeof  null){
    console.log('Good bye');
}

