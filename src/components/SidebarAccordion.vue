<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'


let accordionStates = ref([false, true])

const toggleAccordion = (index) => {
  // Toggle the state of the clicked accordion
  accordionStates.value[index] = !accordionStates.value[index];
}

const books = ref([])
const categories = ref([])
const authors = ref([])

const getAllBooks = async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/books/')
  books.value = res.data
}

const getAllCategories = async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/categories/')
  categories.value = res.data
}

const getAllAuthors = async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/authors/')
  authors.value = res.data
}

onMounted(async  () => {
  getAllBooks()
  getAllCategories()
  getAllAuthors()
})

</script>

<template>
  <div class="sidebar__accordion">

    <div class="list">
      <div class="list__header" @click="toggleAccordion(0)">
        <h3 class="list__title">Categories</h3>
        <i :class=" accordionStates[0] ? 'bx bx-plus' : 'bx bx-minus'"></i>
      </div>
      <ul class="list__items" v-show="!accordionStates[0]">

        <li class="list__item" v-for="category in categories" :key="category">
          <a href="">
            {{ category.name }}
          </a>
        </li>
        
      </ul>
    </div>
    <div class="list">
      <div class="list__header" @click="toggleAccordion(1)">
        <h3 class="list__title">Authors</h3>
        <i :class=" accordionStates[1] ? 'bx bx-plus' : 'bx bx-minus'"></i>
      </div>
      <ul class="list__items" v-show="!accordionStates[1]">

        <li class="list__item" v-for="author in authors" :key="author">
          <a href="">
            {{ author.name }}
          </a>
        </li>
        
      </ul>
    </div>

    

  </div>
</template>

<style>
.sidebar__accordion{
  width: 300px;
  padding: 0 15px;
  border: 1px solid #eae8e4;
}
.list{
  padding: 20px;
  border-bottom: 1px solid #eae8e4;

}
.list .list__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list .list__header:hover{
  cursor: pointer;
}
/* .list .list__header .list__title{font-weight: bold;} */
.list__items{
  padding-left: unset;
  margin-top: 20px;
}
.list .list__items .list__item{
  list-style: none;
  height: 40px;
  line-height: 40px;
}
.list .list__items .list__item:hover a{
  color: var(--main-clr);
}
</style>