<script setup>
import Navs from '@/components/Navs.vue'

</script>

<template>
  <div class="header">
      <div class="logo">
        <h1><router-link :to="{name: 'home'}">Logo</router-link></h1>
      </div>

      <Navs />
      
      <!-- <div class="login__singup">
        <button class="signup__btn"><router-link :to="{name: 'login'}">Login / Signup</router-link></button>
      </div> -->
      <div class="search__box">
        <form action="">
          <i class='bx bx-search' style='color:#a3a3a3'></i>
          <input type="text" placeholder="Search by Keywords">
        </form>
      </div>
  </div>
</template>

<style scoped>
.header{
  height: 88px;
  border-bottom: 1px solid #eae8e4;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.search__box{
  width: 425px;
  height: 45px;
  background-color: #F6F5F3;
}
</style>
