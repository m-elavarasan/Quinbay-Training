<template>
  <div class="home">
    <NavBar/> 
    <LeftBar/>
    <ProductList/>
    <RightBar :cartItems="cartItems"/>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ProductList from '../components/ProductList.vue';
import LeftBar from '@/components/LeftBar.vue';
import NavBar from '@/components/NavBar.vue';
import RightBar from '@/components/RightBar.vue'
export default {
  name: 'HomeView',
  components: {
    ProductList,
    LeftBar,
    NavBar,
    RightBar
},
data() {
    return {
      cartItems: []
    };
  },
  methods: {
    addProductToCart(product) {
      let productIndex = this.cartItems.findIndex(item => item.id === product.id);
      if (productIndex === -1) {
        this.cartItems.push({ ...product, count: 1 });
      } else {
        this.cartItems[productIndex].count++;
      }
    }
  },
  computed: {
    ...mapGetters(["getCartData"])
  },
  mounted() {
    this.cartItems = this.getCartData;
  }
};
</script>
