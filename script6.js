let BASE_URL = "https://mock-api-builder.vercel.app/api/schema/get";

Vue.component("cart", {
  props: ["cart"],
  template:
    '<div class="goods-list"><cartItem v-for="cartItems in cart" :cartItem="cartItems"></cartItem></div>',
});

Vue.component("cartItem", {
  props: ["cartItem"],
  template:
    "<div><h4>{{cartItem.productName}}</h4><h5>{{cartItem.price}}</h5><hr/></div>",
});

Vue.component("good-list", {
  props: ["goods", "addCart"],
  template:
    '<div class="goods-list"><good-item v-for="item in goods" :item="item" :addToBasket="addCart"></good-item></div>',
});
Vue.component("good-item", {
  //   data: addToBasket(arg) {
  //     let tempItem = this.goods.filter((item) => item.id.includes(arg));
  //     // console.log(tempItem);
  //     // if (this.cart.includes(tempItem[0])) {
  //     //   // this.count += 1;
  //     // } else {
  //       return this.cart.push(tempItem[0]);
  //     // }
  //     // console.log(this.cart);
  //   },
  props: ["item", "addToBasket"],
  template: `<div class="goods-item">
<h2>{{item.productName}}</h2>
<h5>{{item.price}}</h5>
<hr />
<button v-on:click="addToBasket(item.id)">Add to cart🛒</button>
</div>`,
});

const app = new Vue({
  el: "#root",
  data: {
    goods: [],
    filteredGoods: [],
    searchGoods: "",
    errorMessage: "",
    cart: [],
    // count: 0,
  },
  methods: {
    getGoods() {
      fetch(`${BASE_URL}/602c166a89c4a60009ef7046`)
        .then((r) => r.json())
        .then((r) => {
          this.goods = r;
          this.filteredGoods = this.goods;
        })
        .catch((e) => {
          this.errorMessage = e;
          alert("List is empty");
        });
    },
    addToBasket(arg) {
      let tempItem = this.goods.filter((item) => item.id.includes(arg));
      // console.log(tempItem);
      if (this.cart.includes(tempItem[0])) {
        // this.count += 1;
      } else {
        this.cart.push(tempItem[0]);
      }
      console.log(this.cart);
    },
  },
  computed: {
    filteredGoods() {
      return this.goods.filter((item) =>
        item.productName.toLowerCase().includes(this.searchGoods)
      );
    },
  },

  mounted() {
    this.getGoods();
  },
});
