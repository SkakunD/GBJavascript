const goods = [
  { title: "Shirt", price: 150 },
  { title: "Socks", price: 50 },
  { title: "Jacket", price: 350 },
  { title: "Shoes", price: 250 },
  { price: 250 }, // товар у которого отсутствет заголовок, но при это он прописан в значнии по умолчании функции renderGoodsItem
  { title: "Shoes" }, // аналогично товар без цены
];

let itemsList = document.querySelector(".goods-list"); // объявляем переменную и присваиваем блок куда будем рендерить товары, чтобы повторно не вызывать querySelector

const renderGoodsItem = (title = "Name item", price = 0) => {
  // можно упростить убрав return  и { } но тогда код будет менее читабельный
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
  //   console.log(goodsList);
  itemsList.innerHTML = goodsList.join(""); // запятые убрали методом массива join так как результат работы map массив с версткой и запятыми, которые innerHTML не обрабатывает а выводит как новый блок
};

renderGoodsList(goods);
