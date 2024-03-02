<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <!-- <RouterLink :to="{name: 'books'}">Books</RouterLink>
    <RouterLink :to="{name: 'authors'}">Authors</RouterLink> -->
    <RouterLink :to="{name: 'categories'}">Categories</RouterLink>
    <RouterLink :to="{name: 'about'}">About</RouterLink>
  </nav>
</template>

<style>
nav a{
  color: #19110b;
  margin: 0 10px;
  font-weight: bold;
}
nav a:hover{color: var(--main-clr);}
</style>