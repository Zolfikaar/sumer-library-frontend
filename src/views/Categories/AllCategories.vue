<script setup>
import axios from 'axios'
import {ref,onMounted} from 'vue'
import SidebarAccordion from '@/components/SidebarAccordion.vue'
let gridDisplayActive = ref(true)

let activeDisplay = ref('grid')
const toggleActiveDisplay = (display) => {
  gridDisplayActive.value = ! gridDisplayActive.value
  activeDisplay.value = display
}

let bookOnSale = ref([true,false])

/* ================== Temporary  ========================= */ 
const books = ref()
const booksCount = ref()
onMounted( async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/books/')
  books.value = res.data
  booksCount.value = books.value.length
})

</script>

<template>
  <div class="categories">
    <div class="breadcrumb">Home <i class='bx bx-chevron-right'></i> Thriller & Suspense</div>
    
    <div class="sidbar_and_main_content">

      <SidebarAccordion />
      
      <div class="main__content">
        <div class="main__content__header">
          <p class="result__count">Showing {{ booksCount }} result</p>
          <div class="sort_and_display">
            <div class="sort">
              Default Sorting
              <i class='bx bx-chevron-down'></i>
            </div>
            <div class="display">
              <i class='bx bxs-grid' :class="gridDisplayActive ? 'active' : ''" @click="toggleActiveDisplay('grid')"></i>
              <i class='bx bx-list-ul' :class="!gridDisplayActive ? 'active' : ''" @click="toggleActiveDisplay('list')"></i>
            </div>
          </div>
        </div>

        <div class="content" :class="activeDisplay == 'list' ? 'list' : ''">
          
          <router-link :to="'/book/' + book.id"class="book__card" v-for="book in books" :key="book">
            <div class="book__holder">
              <div class="book__cover">
                <img src="/assets/books/small/10-150x200.jpg" alt="">
              </div>
              <div class="book__info">
                <h2 class="book__title">{{ book.title }}</h2>
                <div class="book__author">
                  <a href="" class="author__name">{{ book.author.name }}</a>
                </div>
                <div class="book__description" v-show="activeDisplay == 'list'">
                  {{ book.desc}}
                </div>
                <div class="price" :class="bookOnSale[0] ? 'sale' : ''">
                  <span class="book__price">${{ book.sell_price}}</span>
                  <span class="book__sale" v-show="bookOnSale[0]">$16.22</span>
                </div>
              </div>
              <div class="actions">
                <i class='bx bx-heart'></i>
                <i class='bx bx-shopping-bag'></i>
              </div>
            </div>
          </router-link>

        </div>
      </div>

    </div>
  </div>
</template>

<style>
.breadcrumb{
  padding: 0 50px;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: var(--main-border);
}
.sidbar_and_main_content{
  padding: 50px;
  display: flex;
}
.main__content{
  padding-left: 30px;
  width: 100%;
}
.main__content__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sort_and_display{
  display: flex;
  align-items: center;
}
.sort_and_display .sort{
  width: 220px;
  padding: 0 15px 10px 15px;
  border-bottom: var(--main-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sort_and_display .display{margin-left: 20px;}
.sort_and_display .display i{
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: var(--main-border);
  color: #BAB7B5;
  font-size: xx-large;
}
.sort_and_display .display i.active{
  color: var(--main-black);

}
.sort_and_display .sort:hover,
.sort_and_display .display i:hover{
    cursor: pointer;
}

/* Main content */

.content{
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
.content .book__card{
  width: 250px;
  min-height: 425px;
  padding: 20px;
  border: var(--main-border);
  margin-top: 10px ;
  margin-bottom: 10px ;
}
.content .book__card:nth-child(even){
  margin-left: 20px;
  margin-right: 20px;
}
.content .book__card:hover{
  cursor: pointer;
  box-shadow: var(--box-shadow);
  transition: all ease-in .3s;
}
.content .book__card .book__cover img{
  width: 100%;
}
.content .book__card .book__title{
  color: var(--main-black);
  font-size: 1rem;
  line-height: 1.5rem;
}
.content .book__card .book__author{
  margin: 10px 0;
}
.content .book__card .book__author .author__name{
  color: var(--font-gray);
}
.content .book__card .book__author .author__name:hover{
  color: var(--main-clr);
}
.content .book__card .price{
  font-size: 1.125rem;
  color: var(--main-black);
  margin-bottom: 20px;
}
.content .book__card .price .book__sale{
  margin-left: 20px;
}
.content .book__card .price.sale .book__price{
  color: var(--soft-gray);
  text-decoration: line-through;
  text-decoration-color: var(--main-clr);
  font-size: 1.110rem;
}
.content .book__card .price.sale .book__sale{
  font-size: 1.130rem;
}
.content .actions{
  text-align: end;
}
.content .actions i:last-child{
  margin-left: 15px;
}
.content .actions i:hover{
  color: var(--main-clr);
}

/* ============== list display ================== */
.content.list{
  flex-direction: column;
}

.content.list .book__card{
  width: 100%;
  min-height: unset;
  height: 260px;
  padding: 50px;
}
.content.list .book__card .book__holder{
  display: flex;
  align-items: center;
}
.content.list .book__card:nth-child(even){
  margin-left: unset;
  margin-right: unset;
}
.content.list .book__card .book__holder .book__info{
  margin: 0 40px;
}
.content.list .book__card .book__holder .actions{display: flex;}
</style>