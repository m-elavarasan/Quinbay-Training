<template>
  <div>
    <h1>Rate Your Experience</h1>
    <form>
      <h4 for="rating">Rate Your Purchase:</h4>
      <select id="rating" v-model="selectedRating">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <h4>Add Remarks</h4>
      <textarea v-model="feedback"></textarea>
      <button @click.prevent="submitRating">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedRating: 0,
      feedback: ''
    }
  },
  methods: {
    submitRating() {
      // Send the rating and feedback data to the server
      alert('Thank you for time.')
      console.log(this.selectedRating, this.feedback);
      this.$router.push({name: "home",});
    }
  }
}
</script>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

 textarea,select {
    margin-bottom: 10px;
    width: 50%;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
  }

  button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
