<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav>
    <RouterLink :to="{name: 'books'}">Books</RouterLink>
    <RouterLink :to="{name: 'authors'}">Authors</RouterLink>
    <RouterLink :to="{name: 'categories'}">categories</RouterLink>
    <RouterLink :to="{name: 'about'}">About</RouterLink>
  </nav>
</template>

<style>
nav a{
  margin: 0 10px;
}
</style>