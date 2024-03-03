<script setup>
import SidebarAccordion from '@/components/SidebarAccordion.vue'
</script>

<template>
  <div class="categories">
    <div class="breadcrumb">Home <i class='bx bx-chevron-right'></i> Thriller & Suspense</div>
    
    <div class="sidbar_and_main_content">

      <SidebarAccordion />
      
      <div class="main__content">
        <div class="main__content__header">
          <p class="result__count">Showing 20 result</p>
          <div class="sort_and_display">
            <div class="sort">
              Default Sorting
              <i class='bx bx-chevron-down'></i>
            </div>
            <div class="display">
              <i class='bx bxs-grid active'></i>
              <i class='bx bx-list-ul' ></i>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.categories{
}
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
  color: #19110b;
  font-size: xx-large;
}
.sort_and_display .display i.active{
  color: #BAB7B5;

}
.sort_and_display .sort:hover,
  .sort_and_display .display i:hover{
    cursor: pointer;
  }
</style>