<template>
    <div class="spec-bar">
        <h2>Specification</h2>
        <p v-html="productSpec"></p>
    </div>
</template>
<script>
export default {
props:{
productSpec:{}
},
}
</script>
<style>
.spec-bar{
margin-bottom: 3%;
margin-top:5% ;
position:fixed;
float: left;
width: 20%;
height: 90vh;
background-color: lightcyan;
}
</style>