const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';

// console.log(one.style);

one.classList.add('two', 'three'); // присваиваем константе one (элементу html) класс two
one.classList.remove('three'); // удаляем класс (remove)

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}

// атрибуты data
console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));

one.setAttribute('data-num', 6);

let gas = document.querySelectorAll('.gas');
for (let i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallons = document.querySelector('.gallons').value;
        let amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

let a = document.createElement('div'); // создаем элемент через js
a.innerHTML = 'Hello!';
a.classList.add('one');
a.onclick = function () {
    alert('hello');
}

document.querySelector('.test').appendChild(a); // добавляем элемент на страницу в элемент div.test

console.log(a);