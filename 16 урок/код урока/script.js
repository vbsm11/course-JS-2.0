let arr = [4, 7, 9];
console.log(arr);

let allP = document.getElementsByTagName('p');
console.log(allP);

let qP = document.querySelectorAll('p');
console.log(qP);

// // 1 ====================================
// for (let i = 0; i < qP.length; i++) {
//     console.log(qP[i]);
// }

// 2 ====================================
// for (let key in qP) {
//     console.log(qP[key]);
// }

// 3 ===================================
// for (let item of allP) {
//     console.log(item);
// }