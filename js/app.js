// alert('dsklndlskf');

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 1
// let itemOfArr = 0;
// while( itemOfArr < arr.length){
//     console.log(arr[itemOfArr]);
//     itemOfArr++
// }
// 2
// перший варіант вирішення задачки
// for (let item of arr){
//     console.log(item);
// }
// другий варіант вирішення задачки
// for (let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// 3
// let i = 0;
// while (i < arr.length){
//     if ( i%2 !== 0 ){
//         console.log(arr[i]);
//     }
//     i++
// };
//4
// перший варіант вирішення
// for (let item of arr){
//     if (item%2 !==0){
//         console.log(item);
//     }
// }
//другий варіант вирішення
// for (let i=0; i< arr.length; i++){
// if (i%2 !== 0){
//     console.log(arr[i]);
// }
// }
// 5
// let item = 0;
// while (item < arr.length){
//     if (item%2 === 0){
//         console.log(arr[item]);
//     }
//     item++
// }
//6
// for (let i = 0; i < arr.length; i++){
//     if (i % 2 === 0){
//         console.log(arr[i]);
//     }
// }
// 7
// for (let i = 0; i < arr.length; i++){
//     let word = 'okten';
//     if (arr[i] % 3 === 0){
//         arr[i] = word;
//         console.log(arr[i]);
//     }
// }
// console.log(arr);
//8
// for (let i = arr.length-1; i >=0; i-- ){
//     console.log(arr[i])
// }
// 9
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }
// for (let i = arr.length-1; i >=0; i-- ){
//     console.log(arr[i])
// }
// for (let i= arr.length-1; i >=0; i--){
//     if (i % 2 === 0) {
//         console.log(arr[i]);
//     }
// }
