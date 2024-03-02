<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'

const props = defineProps({
  id:{
    type: Number,
    default: null
  }
})

const book = ref()
const getBookData = async (id) => {
  try{
    let res = await axios.get('http://127.0.0.1:8000/api/books/' + id)
    book.value = res.data
  } catch (error) {
    console.error('Error fetching book data:', error);
  }
  console.log(book.value);
}

onMounted( async () => {
  getBookData(props.id)
})
</script>

<template>
  <div>
    <div v-if="book">
      <h1>Title: {{ book.title }}</h1>
      <p>Description: {{ book.desc }}</p>
    </div>
    <div v-else>
      <h1 class="loading_data">Loading Data...</h1>
    </div>
  </div>
</template>


<style>

</style>