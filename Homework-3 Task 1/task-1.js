'use strict'

/* Task 1 С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль,
 с помощью console.log) от 0 до 10 включительно */

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0 && i != 0) {
        console.log(i + ' is even number');
    }

    if (i % 2 != 0) {
        console.log(i + ' is odd number');
    }

    if (i === 0) {
        console.log(i + ' is zero');
    }
}
