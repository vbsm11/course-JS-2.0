document.querySelector('.one').onclick = function (event) {
    console.log(event);
    console.log('click');
}

document.querySelector('.two').onclick = function () {
    console.log('click2');
}

document.querySelector('.two').ondblclick = () => {
    console.log('double');
}

document.querySelector('.two').oncontextmenu = () => {
    console.log('right button');
    return false;
}

// let w = 75;
// document.querySelector('.three').onmousemove = () => {
//     document.querySelector('.three').style.width = w + 'px';
//     w++;
// }

document.querySelector('.three').onmouseenter = () => {
    document.querySelector('.three').style.background = 'red';
    console.log(1);
}

document.querySelector('.three').onmouseleave = () => {
    document.querySelector('.three').style.background = 'green';
    console.log(2);
}

document.querySelector('.three').onmousedown = () => {
    document.querySelector('.three').style.background = 'orange';
    console.log(3);
}

document.querySelector('.three').onmouseup = () => {
    document.querySelector('.three').style.background = 'blue';
    console.log(4);
}

let p = 10;
document.querySelector('button').onclick = function (event) {
    p++;
    document.querySelector('progress').value = p;
}