function myAlert(a, c, d) {
    let b = `<p class="${c}">${a}</p>`;
    document.querySelector(d).innerHTML = b;
}

myAlert('Hi', 'red', '.test');
myAlert('Hello', 'orange', '.test2');

// работа с классами!!!!!!!!!!!!!!!!!!!!!!!!!!!1

let m = new Alert('My message', 'red', '.test');
console.log(m);
m.showALert();

let m2 = new Alert2('My message', 'red', '.test', 'home');
m2.showIconALert();
m2.alert1();