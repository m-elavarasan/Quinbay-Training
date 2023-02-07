<template>
    <div class="main-list">
        <NavBar @search="getProducts"/>
        <ul id="product-list">
            <li v-for="item in getProductData.products" :key="getProductData.id">
                <img @click="openProductDetail(item.formattedId)" :src="item.images[0]" width="250px" height="250px"><br>
                <h3>{{ item.name }}</h3> <br> Price: {{ item.price.priceDisplay }}<br> Stock: {{ item.status }} <br> Brand: {{ item.brand }} <br>
                <button @click="addProductToCart(item)">Add to Cart</button>
            </li>
        </ul>
    </div>
</template>
<script>
import NavBar from './NavBar.vue'
import axios from "axios";
import { mapActions, mapGetters } from "vuex";

export default {
    components:{
        NavBar
    },
    data() {
        return {
        }
    },
    created() {
        this.getProducts()
    },
    computed: {
        ...mapGetters(['getProductData']),
    },
    methods: {
        ...mapActions(['addToCart', 'setProductData']),

        addProductToCart(product) {
            this.addToCart(product)
        },
        getProducts(searchText) {
            if (searchText === "") { 
                console.log("No Text");
            }
            else {
                axios
                .get(`https://www.blibli.com/backend/search/products?searchTerm=${searchText}&start=0&itemPerPage=24`)
                .then(response => {
                    this.setProductData(response.data)
                })
                .catch(error => console.log(error))
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
}

</script>
<style>
    .main-list {
        background: lightblue;
        float: left;
        margin-left: 20.5%;
        margin-top: 5%;
        width: 60%;
    }
    #product-list {
        display: flex;
        flex-wrap: wrap;
        padding: 2%;
        justify-content: space-evenly;
    }
    #product-list li {
        padding: 1%;
        list-style: none;
        border: .01px solid #000;
        margin-top: 1%;
        width: 300px;
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
    }
</style>
