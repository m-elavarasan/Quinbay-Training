<template>
  <nav>
    <div class="search-container">
      <input type="text" v-model="searchText" @keyup.enter="handleSearch" />
      <button @click="handleSearch">Search</button>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        searchText: 'samsung'
      }
    },
    methods: {
      handleSearch() {
        console.log('inside handlesearch', this.searchText);
        this.$router.push({
            name: 'home',
          }).catch(()=>{}),
          this.$emit('search', this.searchText)

      }
    }
  };
</script>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: white;
    padding: 10px 0;
  }
  .search-container {
    display: inline-flex;
      justify-content: inline-flex;
    
  }
  input[type="text"] {
    font-size: 24px ;
    padding: 5px 5px;
    width: 50vw;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
 nav button {
    background-color:blue;
    padding: 8px 10px;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    
  }
</style>