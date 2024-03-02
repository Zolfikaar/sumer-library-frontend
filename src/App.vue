<script setup>
import {ref} from 'vue'
import Header from '@/components/Header.vue';
import Topbar from '@/components/Topbar.vue';
import { useRouter,RouterLink, RouterView } from 'vue-router'

const router = useRouter()
let showHeader = ref(true)

router.beforeEach((to, from, next) => {
  showHeader.value = to.meta.showHeader !== false
  next()
})

</script>

<template>
  <Topbar />

  <Header v-if="showHeader"/>

  <RouterView />
</template>