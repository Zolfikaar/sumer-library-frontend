<script setup>
import Navs from '@/components/Navs.vue'

</script>

<template>
  <div class="header">
      <div class="logo">
        <h1><router-link :to="{name: 'home'}">Logo</router-link></h1>
      </div>

      <Navs />
      
      <div class="login__singup">
        <button class="signup__btn"><router-link :to="{name: 'login'}">Login / Signup</router-link></button>
      </div>
  </div>
</template>

<style scoped>
.header{
  height: 80px;
  /* margin: 0 20px; */
  /* padding: 10px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
