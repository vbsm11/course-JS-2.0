
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    document.querySelector('.out-1').textContent = document.querySelector('.div-1').textContent;
    return document.querySelector('.div-1').textContent;
}

// ваше событие здесь!!!
document.querySelector('.div-1').onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
    document.querySelector('.out-2').innerHTML = event.altKey;
    return event.altKey;
}

// ваше событие здесь!!!
document.querySelector('.div-2').onclick = t2;

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    w3 = w3 + 5;
    document.querySelector('.div-3').style.width = w3 + 'px';
    document.querySelector('.out-3').textContent = document.querySelector('.div-3').style.width;
}

// ваше событие здесь!!!
document.querySelector('.div-3').onclick = t3;

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    document.querySelector('.out-4').textContent = document.querySelector('.div-4').textContent;
    return document.querySelector('.div-4').textContent;
}

// ваше событие здесь!!!
document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    document.querySelector('.div-5').classList.toggle('active');
}

// ваше событие здесь!!!
document.querySelector('.div-5').ondblclick = t5;

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    document.querySelector('.ul-6').classList.toggle('hide');
}

// ваше событие здесь!!!
document.querySelector('.div-6').ondblclick = t6;

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    document.querySelector('.div-7').classList.toggle('active');
}

// ваше событие здесь!!!
document.querySelector('.div-7').oncontextmenu = t7;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let ch8 = document.querySelector('.ch-8');

function t8() {
    if (ch8.checked) ch8.oncontextmenu = () => {
        return false;
    }
    else ch8.oncontextmenu = () => {
        return true;
    }
}

// ваше событие здесь!!!
ch8.onchange = t8;

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    document.querySelector('.div-9 img').setAttribute("src", "img/2.png");
}

// ваше событие здесь!!!
document.querySelector('.div-9').oncontextmenu = t9;

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector('.div-10 img').setAttribute("src", "img/2.png");
}

// ваше событие здесь!!!
document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector('.div-11');
let img11 = document.querySelector('.div-11 img');

function t11() {
    img11.setAttribute("src", "img/2.png");
    div11.onmouseleave = () => { img11.setAttribute("src", "img/1.png") };
}

// ваше событие здесь!!!
div11.onmouseenter = t11;

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let div12 = document.querySelector('.div-12');

div12.onmousedown = () => {
    div12.classList.add('active');
}

// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

let div13 = document.querySelector('.div-13');

div13.onmousedown = () => {
    div13.classList.add('active');
}

div13.onmouseup = () => {
    div13.classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let div14 = document.querySelector('.div-14');

function t14() {
    div14.onclick = () => {
        div14.classList.add('active');
    }
}

document.querySelector('.b-14').onclick = t14;

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let div15 = document.querySelector('.div-15');

function t15() {
    div15.textContent = +div15.textContent + 1;
}
// ваше событие здесь!!!
div15.onmousemove = t15;

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

let div16 = document.querySelector('.div-16');
let w16 = 75;

function t16() {
    w16++;
    div16.style.width = w16 + 'px';
}
// ваше событие здесь!!!
div16.onmousemove = t16;

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    div16.onmousemove = t16;
}
function t17Off() {
    div16.onmousemove = () => { return false; }
}

document.querySelector('.b-17_on').onclick = t17On;
document.querySelector('.b-17_off').onclick = t17Off;

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

let div18 = document.querySelector('.div-18');

function t18() {
    div18.innerHTML = div18.offsetWidth;
}
// ваше событие здесь!!!
div18.onmouseenter = t18;

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

let div19 = document.querySelector('.div-19');

function t19() {
    div19.innerHTML = div19.classList;
}
// ваше событие здесь!!!
div18.onmouseout = t19;

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

let progress = document.querySelector('progress');

function t20() {
    progress.value++;
}
// ваше событие здесь!!!
progress.onmousemove = t20;