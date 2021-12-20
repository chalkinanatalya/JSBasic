"use strict";

const products = [
  {
    name: "bla1",
    id: "item1",
    price: "75",
    img: "img/model-item-1.png",
    color: ["Red", "Blue"],
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "bla2",
    id: "item2",
    price: "50",
    img: "img/model-item-2.png",
    color: ["White", "Purple"],
    size: ["XS", "S"],
  },
  {
    name: "bla3",
    id: "item3",
    price: "43",
    img: "img/model-item-3.png",
    color: ["Blue", "Green"],
    size: ["XS", "S", "L", "XL"],
  },
  {
    name: "bla4",
    id: "item4",
    price: "58",
    img: "img/model-item-4.png",
    color: ["Red", "Blue", "Black"],
    size: ["XS", "S", "M"],
  },
  {
    name: "bla5",
    id: "item5",
    price: "34",
    img: "img/model-item-5.png",
    color: ["Red", "Blue", "Black"],
    size: ["XS", "S", "M"],
  },
  {
    name: "bla6",
    id: "item6",
    price: "71",
    img: "img/model-item-6.png",
    color: ["Red", "Blue", "Black"],
    size: ["XS", "S", "M"],
  },
  {
    name: "bla7",
    id: "item7",
    price: "18",
    img: "img/model-item-7.png",
    color: ["White", "Black"],
    size: ["S", "M"],
  },
  {
    name: "bla8",
    id: "item8",
    price: "43",
    img: "img/model-item-8.png",
    color: ["Red", "Green", "White"],
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    name: "bla9",
    id: "item9",
    price: "49",
    img: "img/model-item-9.png",
    color: ["Red", "Green", "White"],
    size: ["L", "XL"],
  },
  {
    name: "bla10",
    id: "item10",
    price: "38",
    img: "img/model-item-10.png",
    color: ["Green", "White"],
    size: ["XS", "M", "L", "XL"],
  },
  {
    name: "bla11",
    id: "item11",
    price: "31",
    img: "img/model-item-11.png",
    color: ["Blue", "Black"],
    size: ["S", "M", "XL"],
  },
  {
    name: "bla12",
    id: "item12",
    price: "55",
    img: "img/model-item-12.png",
    color: ["Red", "Blue", "Green", "White", "Black"],
    size: ["XS", "S", "XL"],
  },
];

/* Расчет количества выбранных товаров. Отображение количества на корзине. */
function cartCounter() {
  let count = 0;
  for (let i = 0; i < sessionStorage.length; i++) {
    count += Number(sessionStorage.getItem(sessionStorage.key(i)));
  }
  document.getElementById("cartCounter").innerHTML = count;
}

function createClickOnItems() {
  const items = document.querySelectorAll(".item");
  /* На каждую кнопку добавляем функцию, которая инкрементирует значение соответствующего ключа сессии (item#):
   * Если ключ сессии, соответствующий данному id не создавался, то ставим значение ключа 1.
   * Если ключ сессии уже существует, то увеличиваем на 1 с каждым тыком.*/
  items.forEach(function (item) {
    item.addEventListener("click", function (event) {
      if (sessionStorage.getItem(event.target.getAttribute("id")) == null) {
        sessionStorage.setItem(event.target.getAttribute("id"), 1);
      } else {
        let counter =
          Number(sessionStorage.getItem(event.target.getAttribute("id"))) + 1;
        sessionStorage.setItem(
          event.target.getAttribute("id"),
          String(counter)
        );
      }
      cartCounter();
    });
  });
}
