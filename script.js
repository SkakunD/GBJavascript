// const goods = [
//   { title: "Shirt", price: 150 },
//   { title: "Socks", price: 50 },
//   { title: "Jacket", price: 350 },
//   { title: "Shoes", price: 250 },
//   { price: 250 }, // товар у которого отсутствет заголовок, но при это он прописан в значнии по умолчании функции renderGoodsItem
//   { title: "Shoes" }, // аналогично товар без цены
// ];

let itemsList = document.querySelector(".goods-list"); // объявляем переменную и присваиваем блок куда будем рендерить товары, чтобы повторно не вызывать querySelector

const API_URL = "https://jsonplaceholder.typicode.com/users";

class GoodsItem {
  // класс одного товара и его рендер
  constructor(name, username) {
    this.name = name;
    this.username = username;
  }

  render() {
    return `<div class="goods-item"><h3>${this.name}</h3><p>${this.username}</p><input type='button' class='addToBasket' value='Click to basket'></div>`;
  }
}

class GoodsList {
  // класс списка товаров и рендер списка на основое созданного класса от одного товара
  constructor() {
    this.goods = [];
  }
  // fetch() {
  //   this.goods = [
  //     { title: "Shirt", price: 150 },
  //     { title: "Socks", price: 50 },
  //     { title: "Jacket", price: 350 },
  //     { title: "Shoes", price: 250 },
  //     { price: 250 },
  //     { title: "Shoes" },
  //   ];
  // }

  fetchGoods(url) {
    return fetch(url)
      .then((r) => {
        let data = r.json();
        return data;
      })
      .then((data) => {
        this.goods = data.map((item) => {
          item.name, item.username;
        });
      });
    // this.goods = data.map((item) => {
    //   item.product_name, item.price;
  }

  render() {
    let listHtml = "";
    this.goods.forEach((item) => {
      const goodItem = new GoodsItem(item.name, item.username);
      listHtml += goodItem.render();
    });
    itemsList.innerHTML = listHtml;
  }
  countPrice() {
    //метод подсчета суммы товаров на странице - 2 задание
    let itemsPrice = 0;
    this.goods.forEach((item) => {
      if (item.price !== undefined) {
        itemsPrice += item.price;
      }
    });
    console.log(itemsPrice);
  }
}

class Basket {
  constructor() {
    this.backetItems = [];
    this.totalPrice = "";
    this.amountItems = "";
  }
  addToBasket() {}

  countPrice() {
    // метод подсчитывающий сумму корзины
    let count = "";
    this.backetItems.forEach((item) => {
      if (item.price !== undefined) {
        count += item.price;
      }
    });
    this.totalPrice = count;
  }
  countItems() {
    // метод подсчитывающий общее количество товаров
    this.amountItems = this.backetItems.length;
  }
}

class basketItem extends GoodsItem {
  constructor() {
    super(title, price);
    this.countItem = "";
  }
  deleteItem() {
    // метод удаляющий товар из корзины
  }
}

// const renderGoodsItem = (title = "Name item", price = 0) => {
//   // можно упростить убрав return  и { } но тогда код будет менее читабельный
//   return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

// const renderGoodsList = (list) => {
//   let goodsList = list.map((item) => renderGoodsItem(item.title, item.price));
//   //   console.log(goodsList);
//   itemsList.innerHTML = goodsList.join(""); // запятые убрали методом массива join так как результат работы map массив с версткой и запятыми, которые innerHTML не обрабатывает а выводит как новый блок
// };

// renderGoodsList(goods);
const newList = new GoodsList();
newList.fetchGoods(API_URL);
newList.render();
// newList.countPrice();
