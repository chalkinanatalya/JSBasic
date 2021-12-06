'use strict'

/* Task 1 1.
Написать функцию, преобразующую число в объект. 
Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
 - единицы (в свойстве units)
 - десятки (в свойстве tens)
 - сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:

{
  units: 5, //это единицы
  tens: 4,  //это десятки
  hundreds: 0, //это сотни
}

Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

Вам может пригодиться:
- Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее 
здесь https://mzl.la/2XCVSsx
- Math.floor(value) - метод возвращает целое число, которое меньше или равно 
данному числу (проще говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO
- Используйте также остаток от деления на 10, например 123 % 10 будет 3
- Вам также может пригодится делить число на 100 и на 10. */

let insertNumber = parseInt(prompt('Insert number'));

class YourNumber {
    constructor(number) {
        this.units = number % 10;
        this.tens = Math.floor((number % 100) / 10);
        this.hundreds = Math.floor(number / 100);
    }
}

if (insertNumber < 1000 && insertNumber >= 0 && insertNumber != NaN) {
    const num1 = new YourNumber(insertNumber);
    alert('Hundreds are ' + num1.hundreds + ', tens are ' + num1.tens + ', units are ' + num1.units);
} else {
    alert('Wrong number');

}
