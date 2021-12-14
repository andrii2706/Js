// alert('lsdfhlsdknf');
//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let textId = document.getElementById('text');
let button = document.getElementById('btn');
//Перший метод
// button.onclick = function () {
//     textId.style.display ='none';
// }
//Другий метод
// function ClickOn(e) {
//     textId.style.display = 'none';
// }
//Третій метод
// function ClickOn(e){
//     textId.classList.add('none');
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
// інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// function inputFormEvent(e) {
//     let inputAge = document.getElementById('age');
//     // console.log(inputAge.value);
//     if (!inputAge.value) {
//         alert('Input your age in to filed');
//     } else if (inputAge.value <= 18) {
//         alert('Go to school boy');
//     } else {
//         alert('Welcome on our website');
//     }
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// const menuTitle = document.querySelector('.menu');
// const titleElement = menuTitle.querySelector('.title');
//
// titleElement.onclick = function () {
//     menuTitle.classList.toggle('hidden');
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


const contacts = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    }
]
let divTemplate = document.createElement('div');
for (let contact of contacts) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let hr = document.createElement('hr');
    h2.innerText = contact.name;
    h3.innerText = contact.email;
    h4.innerText = contact.username;
    p.innerText = contact.phone;
    btn.innerText = 'Hide Info About User From JSONPlaceHolder'
    btn.onclick = function () {
        p.classList.add('infoHidden');
        h3.classList.add('infoHidden');
        h2.classList.add('infoHidden');
        h4.classList.add('infoHidden');
    }
    div.append(h2, h3, h4, p, btn, hr);
    divTemplate.append(div, hr);
}
document.body.appendChild(divTemplate);
