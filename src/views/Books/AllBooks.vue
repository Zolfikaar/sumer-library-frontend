<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
// import { useBookStore } from '@/stores/book';

// const books = useBookStore().getAllBooks()
// const books = useBookStore().books

// const homeMsg = ref()

// const getHomeMsg = async () => {
//   let response = await axios.get('/api/') // .then().then()
//    homeMsg.value = response.data

//   // await axios.get('/api/').then((res) => {
//   //     homeMsg.value = res.data
//   //   })

//   console.log(homeMsg.value);
// }


const books = ref([])

const getAllBooks = async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/books/')
  books.value = res.data
  // console.log(books.value);
}

onMounted(async  () => {
  getAllBooks()
  // console.log(books);
})
</script>

<template>
  <div>
    <h1>Al Books</h1>
    <div class="books" v-if="books">
      <div class="book" v-for="book in books" :key="book">
        <router-link :to="'/book/' + book.id">
          <!-- <div class="book__cover">
            <img :src="book.cover" alt="">
          </div> -->
          <h2 class="book__name">{{ book.title }}</h2>
          <div class="author">Author: {{ book.author_id }}</div>
          <div class="category">Category: {{ book.category_id }}</div>
          <div class="category">price: {{ book.sell_price }}</div>
          <div class="category">Year of Publish: {{ book.year }}</div>
        </router-link>
      </div>
    </div>

    <div v-else>
      <h1 class="loading_data">Loading Data...</h1>
    </div>
  </div>
</template>

<style>
.books{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  
}
.book{
  width: 280px;
  height: 350px;
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
  background-color: white;
}
.book:hover{
  transition: all ease-in-out .1s;
  box-shadow: 5px 4px 5px rgba(0,0,0,.3);
  cursor: pointer;
}
</style>