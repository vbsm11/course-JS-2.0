// описание класса!!!!!!!!!!!!!!!!!!!!!!

class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);
        this.icon = icon;
    }
    showIconALert() {
        document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><span class="material-icons">
        ${this.icon}</span>${this.message}</p>`;
    }
    alert1() {
        alert('hi ' + this.message);
    }
}