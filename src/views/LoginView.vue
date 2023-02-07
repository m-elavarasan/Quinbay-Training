<template>
    <div class="login"> 
        <h2> Login</h2>
        <input type="text" v-model="userName" placeholder="Username" />
        <br/>
        <br/>
        <input type="text" v-model="passWord" placeholder="Password" />
        <br>
        <br>
        <input type="button" value="Login" @click="userValidate"/>
        </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

    export default {
        data() {
            return {
                userName:'',
                passWord:''
            }
        },
        computed: {
    ...mapGetters(['getUserData']),
},
methods: {
    userValidate(){
        console.log(this.getUserData.username);     
        if (this.getUserData.username === this.userName && this.getUserData.password === this.passWord) {
          console.log('User Logged IN');
     this.$router.push({
         name: 'home',
         params: {
             id: this.username
         },
     })
        }
          else 
          {
        alert('Invaild User Name Password')  
        }    
    }
},
    }
</script>

<style>
.login{
    width: 50vw;
    height: 50vh;
margin-left: 25%;
margin-top: 10%;
    position: fixed;
    background-color: lightcyan;
}
.login input[type="text"] {
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
 .login input[type="button"] {
    height: 40px;
    width: 50%;
    background-color:blue;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
</style>