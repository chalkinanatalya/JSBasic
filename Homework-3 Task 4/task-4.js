'use strict'
/* Task 4 Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
      1. Получить все товары, у которых есть фотографии
      2. Отсортируйте товары по цене (от низкой цены к высокой) */

const products = [
   {
      id: 3,
      price: 127,
      photos: [
         '1.jpg',
         '2.jpg'
      ]
   },

   {
      id: 5,
      price: 499,
      photos: []
   },

   {
      id: 10,
      price: 26,
      photos: [
         '3.jpg'
      ]
   },

   {
      id: 8,
      price: 78
   }
]

let hasPhoto = products.filter(function (product) {
   return product.photos != null && product.photos != '';
});

/*let hasPhoto = products.filter(
   product => (product.photos != null && product.photos != '')
);*/

let comparePrice = products.sort((prod1, prod2) => prod1.price - prod2.price
);


console.log(hasPhoto);

console.log(products);

