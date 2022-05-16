class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw(out) {
        document.querySelector(out).innerHTML =
            `<div><img src=img/${this.image}.png><br>
            Наименование: ${this.name}<br>
            Цена: ${this.amount}<br>
            Количество: ${this.count}<br>
            Sale: ${this.sale}</div>`;
    }
}