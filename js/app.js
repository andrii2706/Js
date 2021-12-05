// alert('22');

// Все робити за допомоги js.
// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let creatElement = document.createElement("div");
// creatElement.innerText = 'Hello Okten Mentor';
// document.body.appendChild(creatElement);
// let clone = document.body.appendChild(creatElement.cloneNode(true));
// clone.classList.add('greeting');
// creatElement.classList.add('greeting');



// - Є масив:
//  const arr = ['Main','Products','About_us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// const menu =  document.getElementsByClassName('menu')[0];
// for (let i = 0; i < arr.length; i++){
//  const li = document.createElement('li');
//  li.innerText = arr[i];
//  menu.append(li);
// }

// - Є масив
// let coursesAndDurationArray = [
//  {title: 'JavaScript Complex', monthDuration: 5},
//  {title: 'Java Complex', monthDuration: 6},
//  {title: 'Python Complex', monthDuration: 6},
//  {title: 'QA Complex', monthDuration: 4},
//  {title: 'FullStack', monthDuration: 7},
//  {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (let cours of coursesAndDurationArray ){
//  let coursesAndDurationObject = document.createElement("div");
//  let header = document.createElement("h1");
//  header.innerText = cours.title;
//  let paragraph = document.createElement("p");
//  paragraph.innerText = cours.monthDuration;
//  document.body.append(coursesAndDurationObject);
//  coursesAndDurationObject.append(header);
//  coursesAndDurationObject.append(paragraph);
// }




// - Є масив
let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (let cours of coursesAndDurationArray ){
//  let coursesAndDurationObject = document.createElement("div");
//  let header = document.createElement("h1");
//  header.classList.add("heading");
//  header.innerText = cours.title;
//  let paragraph = document.createElement("p");
//  paragraph.innerText = cours.monthDuration;
//  paragraph.classList.add("description");
//  document.body.append(coursesAndDurationObject);
//  coursesAndDurationObject.classList.add("item")
//  coursesAndDurationObject.append(header);
//  coursesAndDurationObject.append(paragraph);
// }
