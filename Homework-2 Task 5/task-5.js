'use strict'
/* Task 5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.*/

function Sum(a, b) {
   return a + b;
};


function Subtraction(a, b) {
   return a - b;
};


function Multiplication(a, b) {
   return a * b;
};


function Division(a, b) {
   return a / b;
};

/**
 * 
 * @param {num} arg1 первое значение аргумента
 * @param {num} arg2 второе значение аргумента
 * @param {num} operation требуемая математическая операция
 */

function mathOperation(arg1, arg2, operation) {
   switch (operation) {
      case "plus":
         return Sum(arg1, arg2);

      case "minus":
         return Subtraction(arg1, arg2);

      case "multi":
         return Multiplication(arg1, arg2);

      case "division":
         return Division(arg1, arg2);
   }

}

console.log(mathOperation(1, 2, "plus"));
console.log(mathOperation(3, 4, "minus"));
console.log(mathOperation(5, 6, "multi"));
console.log(mathOperation(7, 8, "division"));



