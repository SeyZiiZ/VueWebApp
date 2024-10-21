<template>
        <v-footer class="">
            <div class="">
                <strong>Connectez-vous avec nous sur les réseaux sociaux !</strong>
            </div>

            <div class="logos">

                <a href="#" class="redirectSocial"> <span class="pi pi-discord"></span> </a>
                <a href="#" class="redirectSocial"> <span class="pi pi-facebook"> </span> </a>
                <a href="#" class="redirectSocial"> <span class="pi pi-pinterest"> </span> </a>
                <a href="#" class="redirectSocial"> <span class="pi pi-twitter"></span> </a>
            </div>

            <div class="px-4 py-2 bg-black text-center w-100">
                {{ year }} — <strong>Valentin Automobile</strong>
            </div>
        </v-footer>
</template>

<script setup>
import { ref } from 'vue'
import { PrimeIcons } from '@primevue/core/api';
import FadeIn from './Transitions/FadeIn.vue';

const year = new Date().getFullYear();

</script>

<style>
.logos {
    margin: 1%;
    display: flex;
    justify-content: center;
    gap: 30px;
}
.redirectSocial,
.redirectSocial:hover {
color: #213547
}
</style>