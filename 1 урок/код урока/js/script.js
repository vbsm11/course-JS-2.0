console.log('Hello!'); // строки берем в кавычки
console.log('world');
console.log('3333');
console.log(334);
console.log('Hello' + 'world'); // конкатенация
console.log('Hello' + ' world'); // конкатенация
console.log('Hello ' + 'world'); // конкатенация
console.log('Hello' + ' ' + 'world'); // конкатенация
console.info('Hello');
console.log(2.5 / 5);
// alert('Hello');
// alert('Hello'); // ctrl+l (у меня почему-то не работает, можно вручную закомментировать)
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2019;
document.getElementById('out').innerHTML = '<b>2020</b>'; // интерпретировал элемент <b> (жирный шрифт)

document.querySelector('.header').innerHTML = 15;
document.querySelector('#one').innerHTML = 777; // есть решетка
document.getElementById('one').innerHTML = 888; // нет решетки

let b; // var b - устарело
let a = document.querySelector('#one'); // внутрь a получил параграф
let c;
c = document.querySelector('.header');

a.innerHTML = 9999; // new! - ошибка (занятые слова не применять для переменных)
c.innerHTML = 6666;