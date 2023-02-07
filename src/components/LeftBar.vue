<template>
    <div class="left-bar">
        <h2>Filter Mobile</h2>
        <form id="filter-mobile">
            <div class="form-group">
                <select id="brand" v-model="selectedBrand">
                    <option v-for="item in getProductData.products" :key="item.id" :value="item.brand">{{item.brand}}</option>
                  </select>
                  
            </div>
            <div class="form-group">
                    <select id="ram">
                    <option value=" " selected></option>
                    <option value="4gb">4 GB</option>
                    <option value="6gb">6 GB</option>
                    <option value="8gb">8 GB</option>
                    <option value="12gb">12 GB</option>
                </select>
            </div>            
            <div class="form-group">
                <select id="rom">
                    <option value=" " selected></option>
                    <option value="32gb" >32 GB</option>
                    <option value="64gb">64 GB</option>
                    <option value="128gb">128 GB</option>
                    <option value="246gb">246 GB</option>
                </select>
            </div>
            <div class="form-group">
                <input type="button" value="Filter Mobile" @click="filterProducts" />
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: 'LeftBar',
    data() {
        return {
            brand: '',
            ramSize: '',
            romSize: '',
            selectedBrand:''
        }
    },
    computed: {
     ...mapGetters(['getProductData']),
 },
 methods: {
        filterProducts() {
            this.$emit('filter', {
                brand: this.brand,
            });
        },
    },
};
</script>

<style>
.left-bar {
    margin-bottom: 3%;
    margin-top: 5%;
    position: fixed;
    float: left;
    width: 20%;
    height: 90vh;
    background-color: lightcyan;
}

.form-group {
    padding: 2%;
    height: 100%;
    width: 100%;
}

.form-group input[type=submit]:hover {
    background-color: black;
    transition-duration: 800ms;
}

.form-group input[type=button] {
    height: 40px;
    width: 75%;
    text-align: center;
    background-color: blue;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

.form-group input[type=text] {
    height: 50%;
    width: 15vw;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
}
#ram, #brand,#rom {
    height: 50%;
    width: 15vw;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
}
</style>