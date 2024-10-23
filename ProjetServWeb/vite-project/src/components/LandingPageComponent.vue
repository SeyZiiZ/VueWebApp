<template>
    <div>
        <LandingPage></LandingPage>
        <h1 class="monH1">Profitez de la vie à bord de l'un de nos bolides et délaissez votre ancienne vie.</h1>
        <h1>En Savoir Plus ?</h1>
        <Accordeon></Accordeon>
    </div>
</template>

<script setup>

import LandingPage from './LandingPage.vue';
import Accordeon from './Accordeon.vue';
import Footer from './Footer.vue';
import FadeIn from './Transitions/FadeIn.vue';
</script>

<style scoped>
@media screen and (min-width: 1600px) {
    .monH1 {
        margin-top: 100px;
    }
}
@media screen and (max-width: 1600px) {
    .monH1 {
        font-size: 2rem;
    }
}
</style>