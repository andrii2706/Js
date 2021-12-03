//alert('22');
//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone
//
// }
//
// const user1 = new User(1, 'Andrii', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user2 = new User(2, 'Oleg', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user3 = new User(3, 'Max', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user4 = new User(4, 'Vasya', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user5 = new User(5, 'Olga', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user6 = new User(6, 'Roman', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user7 = new User(7, 'Mishael', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user8 = new User(8, 'John', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user9 = new User(9, 'Ostap', 'Pupkin', 'adnrii@gmail.com', '05123654785');
// const user10 = new User(10, 'Taras', 'Pupkin', 'adnrii@gmail.com', '05123654785');
//
// let emptyArr = [];
// emptyArr[0] = user1;
// emptyArr[1] = user2;
// emptyArr[3] = user3;
// emptyArr[2] = user4;
// emptyArr[5] = user5;
// emptyArr[4] = user6;
// emptyArr[8] = user7;
// emptyArr[7] = user8;
// emptyArr[6] = user9;
// emptyArr[9] = user10;
//
// console.log(emptyArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(emptyArr.filter(user => user.id % 2));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(emptyArr.sort(user=>user.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// const karina = new Client(2, 'Karina', 'Melesova', 'karina@gmail.com', '+380668579540', 2);
// const oleg = new Client(1, 'Oleg', 'Melesov', 'Oleg@gmail.com', '+380669959540', 1);
// const ivan = new Client(4, 'Ivan', 'Melesov', 'Oleg@gmail.com', '+380669959540', 3);
// const andrii = new Client(3, 'Andrii', 'Melesov', 'Oleg@gmail.com', '+380669959540', 4);
// const roman = new Client(5, 'Roman', 'Melesov', 'Oleg@gmail.com', '+380669959540', 5);
// const vika = new Client(7, 'Vika', 'Melesov', 'Oleg@gmail.com', '+380669959540', 7);
// const nadia = new Client(6, 'Nadia', 'Melesov', 'Oleg@gmail.com', '+380669959540', 6);
// const sergii = new Client(8, 'Sergii', 'Melesov', 'Oleg@gmail.com', '+380669959540', 8);
// const olya = new Client(10, 'Olya', 'Melesov', 'Oleg@gmail.com', '+380669959540', 10);
// const lera = new Client(9, 'Lera', 'Melesov', 'Oleg@gmail.com', '+380669959540', 9);
//
// let emptyArr = [];
//  emptyArr[0] = karina;
//  emptyArr[1] = oleg;
//  emptyArr[2] = ivan;
//  emptyArr[3] = andrii;
//  emptyArr[4] = roman;
//  emptyArr[5] = vika;
//  emptyArr[6] = nadia;
//  emptyArr[7] = sergii;
//  emptyArr[8] = olya;
//  emptyArr[9] = lera;

// console.log(emptyArr);
// const sortedArr = emptyArr.sort((a, b) => {
//     if (a.order > b.order){
//         return 1
//     }
//     if (a.order < b.order) {
//         return -1;
//     }
//     return 0
// })
// console.log(sortedArr);
