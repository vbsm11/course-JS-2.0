let a = 6;
let b = 'Hello';

console.log(a);

let inputIn = document.querySelector('.input-in'); // input
let button = document.querySelector('button'); // button
let div = document.querySelector('.out');

button.onclick = function () {
    // выполнится когда кнопка будет нажата
    console.log('Работает!!!');
    // console.log(inputIn.value); // через точку пишется свойство переменной, которое мы хотим узнать
    let b = +inputIn.value; // если знаем, что пользователь будет вводить числа, добавляем + перед значением переменной. тип number в html не канает
    console.log(b + 10); // '66' + 10 = 6610
    div.innerHTML = b;
    inputIn.value = ''; // присваиваем пустую строку, чтобы поле ввода очистилось после нажатия кнопки
}