// document.querySelector('button').onclick = () => { // стрелочная ф-ция применяется как анонимная, т.е больше в коде мы ее не вызываем
//     console.log(document.querySelector('#one').value);
//     document.querySelector('button').style.backgroundColor = // с помощью style выбранному элементу можно задать свойство из css. свойства из двух слов пишутся в такомСтиле.
//         document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => { // событие oninput срабатывает каждый раз, когда изменяется состояние inputa
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value;
// }

document.querySelector('#btn-1').onclick = () => {
    console.log(document.querySelector('#i2').value);
    let myCheckBox = document.querySelector('#i2');
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Нажат');
    }
    else {
        console.log('Не нажат');
    }
}

document.querySelector('#btn-2').onclick = (event) => { // передаем внутрь ф-ции параметр evet
    event.preventDefault(); // эта строка позволяет остановить перезагрузку формы (т.е ее сценарий action???)
    // let text = document.querySelector('#two');
    // console.log(text.value);
    // text.value = "one";
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.two.value); // переменная form, свойство elements, айди элемента в форме two и его свойство value
    console.log(form.elements.three.value);
}