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
// let number = 5;
// let str = 'Hello Mentor';
// let booleanThing = true;
// let arrOrObj = [];
// let arrOrObj2 = {};
// let something = number;
// if (typeof something === 'number'){
//     console.log(1);
// }else if (typeof something === 'boolean' ){
//     console.log(2);
// }else if ( typeof something === 'string'){
//     console.log(3);
// }else if ( typeof something === 'object' || typeof something  ===  Array ){
//     console.log(4);
// }else if (typeof something ===  'undefined'){
//     console.log('Good bye');
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let goToOkten = prompt('Чи ідемо ми сьогодні вчитись в Okten');
// if (goToOkten >= +10 && goToOkten <= +22){
//     console.log('Ми Ідемо вчитись');
// }else {
//     console.log('Ми вчимось дома');
// }
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let numberOfGame = +prompt('Ваше число');
// switch (numberOfGame) {
//     case(1):
//         console.log('Ви грали Автомобіль');
//         break
//     case(2):
//         console.log('Ви виграли Мотоцикл');
//         break
//     case(3):
//         console.log('Ви виграли Телефон');
//         break
//     case(4):
//         console.log('Ви виграли Квартиру');
//         break
//     case(5):
//         console.log('Ви виграли Курс Від Октену(Шутка!!!)');
//         break
//     default: console.log('Введіть інше число');
// }


