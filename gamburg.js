class Stuffing {
  constructor() {
    this.name;
    this.price;
    this.cal;
  }
  changeStuff(name, price, cal) {
    this.name = name;
    this.price = price;
    this.cal = cal;
  }
}

class Topping extends Stuffing {
  constructor(name, price, cal) {
    super(name, price, cal);
  }
}

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
    this.price = (size == "small" ? 50 : 100) + stuffing.price;
    this.cal = (size == "small" ? 20 : 40) + stuffing.cal;
  }
  addTopping(topping) {
    this.topping.push(topping);
    this.price += topping.price;
    this.cal += topping.cal;
  } // Добавить добавку
  removeTopping(topping) {
    let tempTopping = [];
    this.topping = this.topping.forEach((item) => {
      if (item.name !== topping) {
        tempTopping.push(item);
      } else {
        this.price -= item.price;
        this.cal -= item.cal;
      }
    });
    this.topping = tempTopping;
  } // Убрать добавку
  getToppings() {
    console.log(this.topping);
  } // Получить список добавок
  getSize() {
    console.log(this.size);
  } // Узнать размер гамбургера
  getStuffing() {
    console.log(this.stuffing.name);
  } // Узнать начинку гамбургера
  calculatePrice() {
    console.log(this.price);
  } // Узнать цену
  calculateCalories() {
    console.log(this.cal);
  } // Узнать калорийность
}

let stuffCheese = new Stuffing();
stuffCheese.changeStuff("cheese", 10, 20);

let stuffSalad = new Stuffing();
stuffSalad.changeStuff("salad", 20, 5);

let stuffPotato = new Stuffing();
stuffPotato.changeStuff("potato", 15, 10);

let flavoring = new Topping();
flavoring.changeStuff("flavoring", 15, 0);

let mayo = new Topping();
mayo.changeStuff("mayo", 20, 5);

let newHamburger = new Hamburger("small", stuffCheese);
console.log(newHamburger);
newHamburger.addTopping(flavoring);
console.log(newHamburger);
newHamburger.addTopping(flavoring);
console.log(newHamburger);
newHamburger.addTopping(mayo);
console.log(newHamburger);
newHamburger.calculatePrice();
newHamburger.getToppings();
