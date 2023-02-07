<template>
    <div class="checkout-container">
      <h1>Checkout</h1>
      <table class="checkout-table">
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr v-for="item in cartData" :key="item.id">
          <td>{{ item.name }}</td>
          <td>Rs:{{ item.price.minPrice }}</td>
          <td>{{ item.count }}</td>
          <td>Rs:{{ item.price.minPrice * item.count }}</td>
        </tr>
      </table>
      <UserDetailsForm />
    </div>
  </template>
  
  <script>
  import UserDetailsForm from '@/components/CheckOutForm.vue';
  import { mapGetters } from "vuex";
  
  export default {
    components:{
        UserDetailsForm
    },
    name: "CheckoutView",
    computed: {
      ...mapGetters(["getCartData"]),
      cartData() {
        return this.getCartData;
      }
    },
  };
  </script>
  
  <style>
  .checkout-container {
    margin: 20px;
  }
  
  .checkout-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .checkout-table th,
  .checkout-table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .checkout-table th {
    background-color: #ddd;
  }
  </style>
  