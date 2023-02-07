<template>
  <div class="right-bar">
    <h2>Shopping Cart</h2>
    <div class="cart-list">
      <ul>
        <li v-for="item in getCartData" :key="item.id">
          <p class="product-name">{{ item.name }}</p>
          <img @click="openProductDetail(item.formattedId)" :src="item.images[0]" width="5px" height="5px"><br>
          <div class="count-container">
            <button class="dec-count" @click="decreaseCount(item)">-</button>
            <h3 class="count">{{ item.count }}</h3>
            <button class="inc-count" @click="increaseCount(item)">+</button>
          </div>
        </li>
      </ul>
    </div>
    <button class="checkout-button" @click="checkout()">Checkout</button>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
export default {
  name: 'RightBar',
  computed: {
    ...mapGetters(['getCartData']),
  },
  methods: {
    ...mapActions(['setCartData', 'updateCartData']),
    increaseCount(item) {
      item.count++;
      this.updateCartData(this.getCartData);
    },
    decreaseCount(item) {
      if (item.count > 1) {
        item.count--;
        this.updateCartData(this.getCartData);
      }
    },
    checkout() {
      if (this.getCartData.length===0) {
        alert('Empty Cart');
      }
      else {
        this.$router.push({ name: 'checkout' });
      }
    },
    openProductDetail(productId) {
      this.$router.push({
        name: 'product-detail',
        params: {
          id: productId
        },
      });
    }
  },
};
</script>

<style>
.right-bar {
  position: fixed;
  float: right;
  margin-top: 5%;
  width: 19%;
  margin-left: 80%;
  height: 90vh;
  background-color: lightcoral;
}

.cart-list {
  width: 100%;
  overflow-y: scroll;
  height: 80%;
}

.cart-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  border: .2px solid black;
}

.product-name {
  font-size: 16px;
  margin-bottom: 10px;
}

.count-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.dec-count,
.inc-count {
  padding: 8px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 10px;
}

.checkout-button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>