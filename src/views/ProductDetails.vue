<template>
    <div>
        <NavBar/>
        <SpecBar :productSpec="product"/>
        <SingleProduct />
        <RightBar/>   
    </div>
</template>

<script>
    import SingleProduct from '@/components/SingleProduct.vue';
    import NavBar from '@/components/NavBar.vue';
    import RightBar from '@/components/RightBar.vue';
    import SpecBar from '@/components/SpecBar.vue'
    export default {
        name: 'ProductDetails',
        data() {
            return {
                productSpec: {}
            }
        },
        components: {
            SingleProduct,
            NavBar,
            SpecBar,
            RightBar,
        },
        methods: {
            // addProductToCart(product) {
                // let productIndex = this.cartItems.findIndex(item => item.id === product.id);
                // if (productIndex === -1) {
                    // this.cartItems.push({ ...product,
                        // count: 1
                    // });
                // } else {
                    // this.cartItems[productIndex].count++;
                // }
            // }
        },
    }
</script>

<style>

</style>