<template>
  <form id="user-form">
    <h3>Guest User Check Out</h3>
    <div class="user-form">
      <label for="name">Name:</label>
      <input id="name" v-model="name" />
    </div>
    <div class="user-form">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
    </div>
    <div class="user-form">
      <label for="address">Address:</label>
      <textarea id="address" v-model="address"></textarea>
    </div>
    <div class="user-form">
      <label for="phone">Phone:</label>
      <input type="tel" id="phone" v-model="phone" />
    </div>
    <div class="user-form">
      <button type="button" @click="openReview">Pay Now</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
      phone: "",
    };
  },
  methods: {
    openReview() {
      if(this.name!=='' && this.email!=='' && this.address!=='' && this.phone !==''){
      let text = "Order Placed. \nAre you willing to Rate Our Service";
      if (confirm(text) == true) {
        this.$router.push({
          name: "rating",
        });
        this.$store.dispatch('resetCartData');
      } else {
        this.$router.push({
          name: "home",
        });
      }
    }
    else{
      alert('Please Enter Vaild ')
    }
    },
  },
};
</script>

<style>
#user-form {
  background-color: antiquewhite;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-evenly;
}

.user-form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

#name,
#email,
#address,
#phone {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

#user-form button {
  background-color: red;
  border: none;
  padding: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  width: 100%;
}
</style>
