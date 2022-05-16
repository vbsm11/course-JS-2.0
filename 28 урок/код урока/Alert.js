// описание класса!!!!!!!!!!!!!!!!!!!!!!

class Alert {
    constructor(a, c, d) {
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showALert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
    }
    alert1() {
        alert(this.message);
    }
}