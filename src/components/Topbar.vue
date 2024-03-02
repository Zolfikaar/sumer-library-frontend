<script setup>

</script>

<template>
  <div class="topbar">

    <div class="left__side">

      <span class="help__box">
        <i class='bx bx-help-circle'></i>
        Can we help you?
      </span>

      <span class="phoneNum__box">
        <i class='bx bx-mobile-alt'></i>
        +1 246-345-0695
      </span>

    </div>

    <div class="right__side">
        <i class='bx bx-heart'></i>
        <i class='bx bx-user'></i>
        <i class='bx bx-shopping-bag'></i>
    </div>

  </div>
</template>

<style>
.topbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 0 50px;
  border-bottom: 1px solid #eae8e4;
}
.left__side{display: flex;}
.left__side i{margin-right: 10px;}
.left__side .help__box,
.left__side .phoneNum__box{
  display: flex;
  align-items: center;
}
.right__side i:not(:last-child){
  margin-right: 25px;
}


/* =========== Hover Effect ============= */

.left__side .phoneNum__box{margin-left: 20px;}
.right__side i:hover,
.left__side .help__box:hover,
.left__side .phoneNum__box:hover,
.left__side .help__box:hover i,
.left__side .phoneNum__box:hover i {
  color: var(--main-clr);
  cursor: pointer;
}
</style>