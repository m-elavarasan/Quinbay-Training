<template>
  
  <div class="single-product" v-if="product.data">
    <!-- <SpecBar :productSpec="product.data.uniqueSellingPoint" ></SpecBar> -->
    <img :src="product.data.images[0].full" width="500px" height="500px" />
    <h3>{{ product.data.name }}</h3>
    <p>Price: {{ product.data.price.listed}}</p>
    <p>Brand: {{ product.data.brand.name }}</p>
    <p>Stock Count: {{ product.data.stock }}</p>
    <p>Desc:</p>
    <div id="desc" v-html="product.data.uniqueSellingPoint"></div>
    <button @click="addProductToCart(product)">Add to Cart</button>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  components:{
  },
  data() {
    return {
      product: {},
      id: this.$route.params.id
    };
  },
  created() {
    this.getProductDetails();
  },
  computed: {
    ...mapGetters(['getProductData']),
},
methods: {
    ...mapActions(['addToCart']),
    addProductToCart(product) {
        this.addToCart(product)
    },
    getProductDetails() {
      // console.log('inside getproduct');
      axios
        .get(`https://www.blibli.com/backend/product-detail/products/${this.id}/_summary`)
        .then(response => {
          this.product = response.data;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
<style>
.single-product {
  background: lightblue;
  float: left;
  margin-left: 21%;
  margin-top: 5%;
  width: 55%;
  text-align: center;
  padding: 2%;
}

img {
  width: 100%;
  height: auto;
}

button {
  height: 40px;
  width: 50%;
  background-color: red;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-top: 2%;
}
#desc{
  list-style: none;
}
</style>


