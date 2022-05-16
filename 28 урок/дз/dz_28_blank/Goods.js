class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw(out) {
        document.querySelector(out).innerHTML =
            `<div><img src=img/${this.image}.png><br>
            Наименование: ${this.name}<br>
            Цена: ${this.amount}<br>
            Количество: ${this.count}</div>`;
    }
}