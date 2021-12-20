/* Добавляем на страницу блоки с информацией о выбранном товаре.
 * 1. Добавляем стандартную форму через showCartItem().
 * 2. В добавленной форме заполняем селектор данными из массива color текущего товара.
 * 3. В добавленной форме заполняем селектор данными из массива size текущего товара.
 */
function displayBusket() {
  let cartItems = document.querySelector(".cart-items");
  for (let i = 0; i < sessionStorage.length; i++) {
    //1
    cartItems.innerHTML += showCartItem(sessionStorage.key(i));
    //2
    let selectColor = document.getElementById(
      "select" + sessionStorage.key(i) + "Color"
    );
    let colors = products.find(
      (product) => product.id === sessionStorage.key(i)
    ).color;
    for (let i = 0; i < colors.length; i++) {
      let selectOption = document.createElement("option");
      selectOption.textContent = colors[i];
      selectOption.value = colors[i];
      selectColor.appendChild(selectOption);
    }
    //3
    let selectSize = document.getElementById(
      "select" + sessionStorage.key(i) + "Size"
    );
    let size = products.find(
      (product) => product.id === sessionStorage.key(i)
    ).size;
    for (let i = 0; i < colors.length; i++) {
      let selectOption = document.createElement("option");
      selectOption.textContent = size[i];
      selectOption.value = size[i];
      selectSize.appendChild(selectOption);
    }
  }
  calculateTotalPrice();
}

/* Функция возвращающает стандартную форму информации о товаре в корзине.
 * Получает itemId товара. Заполняет поля информацией из объекта с соответствующим id.
 * Селекторы для цвета и размера остаются пустыми (см функцию displayBusket).
 * В input добавляется значение соответсвующего itemId ключа сессии.
 */
function showCartItem(itemId) {
  //console.log(itemId);
  //console.log(products.find((product) => product.id === itemId));
  let product = products.find((product) => product.id === itemId);
  return `
    <div class="cart-items-all">
    <button class="cart-items-close" onclick="removeProduct('${itemId}')">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
        </svg>
    </button>
    <div class="cart-item">
        <img src="${product.img}" alt="cart-img" class="cart-img">
        <div class="cart-common">
            <h2 class="cart-common-title">${product.name}</h2>
            <ul class="cart-common-list">
                <li class="cart-common-list-li">Price: <span class="cart-common-list-sp">$${
                  product.price
                }</span>
                </li>
                <li class="cart-common-list-li">Color:
                    <select id="select${itemId}Color">
                    </select>
                </li>
                <li class="cart-common-list-li">Size:
                    <select id="select${itemId}Size">
                    </select>
                </li>
            </ul>
            <div class="cart-common-list-last">
                <span class="cart-common-list-last-sp">Quantity:</span>
                <label><input class="cart-common-list-last-input" type="number" min="1" required placeholder="2" value="${sessionStorage.getItem(
                  itemId
                )}" onchange="recalculatePrice(this, '${itemId}')"></label>
            </div>
        </div>
    </div>
</div>`;
}

/* Отчистка всей корзины, удалением всех данных сессии.
 * Перенаправление на страницу выбора товаров.
 */
function clearSession() {
  sessionStorage.clear();
  calculateTotalPrice();
  window.location.href = "catalog.html";
}

/* Удаление выбранного товара.
 * Перезагружаем страницу, чтобы пропала форма информации о товаре.
 * Если Больше нет товаров, перенаправление на страницу выбора товаров.
 */
function removeProduct(itemId) {
  sessionStorage.removeItem(itemId);
  calculateTotalPrice();
  if (sessionStorage.getItem(sessionStorage.key(0)) == null)
    window.location.href = "catalog.html";
  else location.reload();
}

/* Расчет полной цены товаров */
function calculateTotalPrice() {
  let totalPrice = 0;
  for (let i = 0; i < sessionStorage.length; i++) {
    totalPrice +=
      Number(
        products.find((product) => product.id === sessionStorage.key(i)).price
      ) * Number(sessionStorage.getItem(sessionStorage.key(i)));
  }
  document.querySelector(".cart-total-sub-price").innerHTML = "$" + totalPrice;
  document.querySelector(".cart-total-grand-price").innerHTML =
    "$" + totalPrice;
}

/* Перерасчет полной стоимости при смене соответствующего количества товаров в input */
function recalculatePrice(count, itemId) {
  sessionStorage.setItem(itemId, String(count.value));
  calculateTotalPrice();
}
