<template>
    <h1>Bienvenue Sur Votre Espace Membre {{ prenomUser }} </h1>
    <LastLoc></LastLoc>
</template>

<script setup>
import { inject } from 'vue';
import LastLoc from './components/userComponents/LastLoc.vue';
import SeeCarsAvailable from './components/userComponents/SeeCarsAvailable.vue';

const prenomUser = inject('userName');

</script>