'use strict'
/* Task 6 Программа должна спросить у пользователя число, это будет количество денег, которое
он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.*/

let yourMoney = prompt("Сколько денег Вы хотите зачислить?");
let rubles = "рубл";

if (yourMoney == null || yourMoney == "" || yourMoney <= 0) {
   rubles = 0;
} else if ((yourMoney % 100 > 10) && (yourMoney % 100 < 20) || (yourMoney % 10 >= 5) || (yourMoney % 10 == 0)) {
   rubles += "ей";
} else if (yourMoney % 10 == 1) {
   rubles += "ь";
} else if ((yourMoney % 10 >= 2) && (yourMoney % 10 <= 4)) {
   rubles += "я";
} else {
   rubles = 0;
}

if (!rubles) {
   alert("Денежку не дали");
} else {
   alert("Ваша сумма в " + yourMoney + " " + rubles + " успешно зачислена");
}

/*
let strLenghth = yourMoney.length - 1;
let lastnum = Number(yourMoney.charAt(strLenghth));

if (lastnum == 1) {
   rubles += "ь";
}

else if (lastnum == 2 || lastnum == 3 || lastnum == 4) {
   rubles += "я";
}

else if (lastnum == 5 || lastnum == 6 || lastnum == 7 || lastnum == 8 || lastnum == 9 || lastnum == 0) {
   rubles += "ей";
}
*/