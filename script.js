class GoodsList {
  // объявляем класс списка
  // класс списка товаров и рендер списка на основое созданного класса от одного товара
  goods = [];
  filteredGoods = [];

  __getGoodsItemTemplate = ({ productName, price, id }) => {
    // верстка отдельного элемента списка
    return `<div>
      <h2>${productName}</h2>
      <h5>${price}</h5>
      <button data-goods-id="${id}">Add to cart</button>
      <hr/>
    </div>`;
  };

  handleChange = (event) => {
    //метод сортировки
    this.filteredGoods = this.goods.filter((item) => {
      // списку присваиваем исходный список с методом фильтр
      const v = event.target.value.toLowerCase(); // создалем константу в которой записывает строку приведенную к нижнему регистру
      return item.productName.toLowerCase().includes(v); // возвращем находим знакчние в которому символы приведенные к нижнему регистру имеют включение константы
    });
    console.log(this.filteredGoods);
    this.render(".goods-list"); // запускаем метод рендер с аргументм обновленного списка
  };

  init(url) {
    // мотед работы строки поиска
    this.input = document.querySelector("[data-id=search]"); // получаем введенный символы
    this.input.addEventListener("input", this.handleChange); // добавляем слушаетеля на инпут и в воде колбека запуск фукнции фильтрации
    this.getGoods(url).then(() => {
      this.render(".goods-list");
    });
  }

  getGoods(url) {
    // метод для запроса списка по адресу
    return fetch(url)
      .then((r) => r.json())
      .then((r) => {
        this.goods = r;
        this.filteredGoods = this.goods;
      });
  }

  render(selector = ".goods-list") {
    // метод рендера списка
    const goodsTemplates = this.filteredGoods
      .map((item) => this.__getGoodsItemTemplate(item))
      .join("");
    const wrapper = document.querySelector(selector);
    wrapper.innerHTML = goodsTemplates;
    wrapper.querySelectorAll("[data-goods-id]").forEach((i) => {
      // навешиваем слушаетля на клик для добавления в корзину
      i.addEventListener("click", () => {
        console.log(cart);
        const id = i.getAttribute("data-goods-id");
        const item = this.goods.find((goodsItem) => goodsItem.id === id);
        cart.addToBasket(item);
      });
    });
  }
}

class Basket {
  backetItems = [];

  getItems() {
    return this.backetItems;
  }

  addToBasket(item) {
    this.backetItems.push(item);
    this.render();
  }

  removeFromBasket(id) {
    this.backetItems = this.backetItems.filter((item) => item.id !== id);
    this.render();
  }

  __getGoodsItemTemplate = ({ productName, price, id }) => {
    return `<div>
      <h5>${productName}</h5>
      <h3>${price}</h3>
      <button data-goods-id="${id}">Remove from cart</button>
      <hr/>
    </div>`;
  };

  render() {
    const goodsTemplates = this.backetItems
      .map((item) => this.__getGoodsItemTemplate(item))
      .join("");
    const wrapper = document.querySelector("[data-id=cart]");
    wrapper.innerHTML = goodsTemplates;
  }
}

const cart = new Basket();

const url =
  "https://mock-api-builder.vercel.app/api/schema/get/602c166a89c4a60009ef7046";
const list = new GoodsList().init(url);
