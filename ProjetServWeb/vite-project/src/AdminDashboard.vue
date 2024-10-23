<template>
    <h1>Bienvenue Sur Votre Admin Dashboard</h1>
    <LocInfos></LocInfos>
    <Graphs></Graphs>
    <LoueursInfos></LoueursInfos>
    <Logout></Logout>
</template>

<script setup>
import LocInfos from './components/AdminComponents/LocInfos.vue';
import Graphs from './components/AdminComponents/Graphs.vue';
import LoueursInfos from './components/AdminComponents/LoueursInfos.vue';
import Logout from './components/Logout.vue';
</script>