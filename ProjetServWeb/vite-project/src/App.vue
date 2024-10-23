<template>
  <NavBar></NavBar>
  <router-view />
  <Footer></Footer>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>

<style scoped>

</style>