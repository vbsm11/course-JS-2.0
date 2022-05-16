let a = 5;
a = a * 2;
try {
    document.querySelector('.test').innerHTML = a;
}
catch (err) {
    alert('Ошибка!');
    console.log(err);
    console.log(1);
}
finally {
    console.log('Программа работает');
}

console.log(a);
t1();


function t1() {
    console.log('Hello');
}