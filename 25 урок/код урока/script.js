// auth=7859d9d42a8834141d529577207c9596
let xhttp = new XMLHttpRequest();
let a = 0;

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText);
    }
}

xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1", true);
xhttp.send();

function myFunction(data) {
    a = data;
    console.log(a);
}

let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText);
    }
}

xhttp2.open("POST", "http://getpost.itgid.info/index2.php?", true);

xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=7859d9d42a8834141d529577207c9596&action=1');

function myFunction2(data) {
    console.log('POST');
    a = data;
    console.log(a);
}