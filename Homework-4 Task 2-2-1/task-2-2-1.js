'use strict'
/* Task 3-1 Сделайте в стиле es5
(по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как
свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount,
который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип
(как объект transport в уроке). */

function Product(name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.make25PersentDiscount = function () {
    this.price *= 0.75;
    alert('new price is ' + this.price);
};

const prod1 = new Product('cucumber', 200);

prod1.make25PersentDiscount();



