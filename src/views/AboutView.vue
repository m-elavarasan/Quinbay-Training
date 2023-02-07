<template>
  <div>
      <NavBar/>
  <SingleProduct/>
  <RightBar/>
  </div>
  </template>
  <script>
  import SingleProduct from '@/components/SingleProduct.vue';
  import NavBar from '@/components/NavBar.vue';
  import RightBar from '@/components/RightBar.vue';
  export default {
      name: 'ProductDetails',
      components:{
          SingleProduct,
          NavBar,
          RightBar,
      }
  }
  </script>
  
  <style>
  </style>