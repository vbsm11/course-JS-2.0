const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(a.length);
console.log(a.push(10, 11, 44, 55, 66)); // push добавляет элементы в конец массива
console.log(a);

b.push('j', 'k');
console.log(b);
console.log(b.pop()); // pop удаляет один элемент с конца массива
console.log(b.pop());
console.log(b);

delete a[3]; // удаляется 3-ий элемент массива, вместо него появляется пустой элемент(empty), длина и индексы массива при этом не меняются
console.log(a);
a.splice(3, 4, 'hi'); // 3 - с какого элемента начинается удаление, 4 - сколько элементов удаляется, 'hi' - что мы можем вставить на место удаленных элементов (длина массива и индексы меняются)
console.log(a);

// shift, unshift - удаляют и соответственно добавляют элементы с начала массива
