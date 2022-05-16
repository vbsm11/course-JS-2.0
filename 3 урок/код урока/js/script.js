let a = 6;


// >= <= == !=
// if (a <= 9) {
//     // выполнится, если выражение в скобках правда
//     console.log('Yes');
// }
// else {
//     console.log('else');
// }

// 13 < a < 45 - в js так нельзя

const button = document.querySelector('button'); // const - константа (переменная, которую нельзя менять)
const input = document.querySelector('.age');

// () => стрелочная функция
button.onclick = () => {
    let num = +input.value;
    if (num >= 16 && num < 60) {
        console.log('Welcome');
    }
    else if (num > 60) {
        console.log('Ты точно сюда?')
    }
    else {
        console.log('Ты не пройдешь');
    }

    switch (num) {
        case 15:
            console.log('Еще год потерпи');
            break;
        case 16:
            console.log('Ура, можно');
            break;
        default:
            console.log('ok');
    }
}

let b = 3;

console.log(b == 3 || b == 7); // && - и || - или