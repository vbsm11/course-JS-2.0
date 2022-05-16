let a = new Set();
a.add(1);
a.add(2);
a.add('Hello');
a.add(1);
a.add('1'); // ===
// a.clear();
// a.delete('Hello'); // удаляет из сета значение 'Hello'

console.log(a);
console.log(a[0]); // !!! set
console.log(a.length); // !!! set
console.log(a.size); // кол-во элементов
console.log(a.has(2)); // true
console.log(a.has('2')); // false - проверяем наличие элемента в сэте

// for (let i = 0; i < a.size) a[i] - ошибка
// for (let i in a) // тоже не работает с сэтами

for (let item of a) {
    console.log(item);
}

let arr = [1, 2, 3, 4, 5, 'hello', 5, 1, 3];

let b = new Set(arr); // !!!! массив в качестве параметра
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);
console.log(bArr[2]);