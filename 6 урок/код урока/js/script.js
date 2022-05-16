let out = document.querySelector('.out');
console.log(out);

// for (i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++) {
    // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';

    for (let k = 1; k < 10; k++) {
        out.innerHTML += `${i}*${k}=${i * k}<br>`;
    }
    out.innerHTML += '<hr>';
}