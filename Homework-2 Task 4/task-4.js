'use strict'
/* Task 4 Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с 
двумя параметрами. Т.е. например, функция для сложения должна принимать два числа,
складывать их и возвращать результат. Обязательно использовать оператор return.*/

function Sum(a, b) {
   return a + b;
};

console.log(Sum(3, 4));

function Subtraction(a, b) {
   return a - b;
};

console.log(Subtraction(3, 4));

function Multiplication(a, b) {
   return a * b;
};

console.log(Multiplication(3, 4));

function Division(a, b) {
   return a / b;
}

console.log(Division(3, 4));


