<template>
    <h1>Bienvenue Sur Votre Espace Membre {{ prenomUser }} </h1>
    <LastLoc></LastLoc>
    <Logout></Logout>
</template>

<script setup>
import { inject } from 'vue';
import LastLoc from './components/userComponents/LastLoc.vue';
import SeeCarsAvailable from './components/userComponents/SeeCarsAvailable.vue';
import Logout from './components/Logout.vue';

</script>