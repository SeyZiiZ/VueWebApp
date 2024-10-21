<template>
    <h1>Notre Catalogue de véhicules</h1>
    <div class="container">
        <ul v-for="voiture in voituresList" :key="voiture">
            <CarsCard :imageCard="voiture.image" :titleCard="voiture.name" :subtitleCard="voiture.subtitle"
                :contentCard="voiture.content" :isAvailable="voiture.isAvailable">
            </CarsCard>
        </ul>
    </div>
</template>

<script setup>
import CarList from '../composables/voitures.json'
import { computed, ref } from 'vue';
import CarsCard from './components/CarsComponents/CarsCard.vue';
import OrderCarList from './components/CarsComponents/OrderCarList.vue';

const voituresList = ref(CarList);

const voituresTrie = computed(() => {
    const nomSorted = [...voituresList.value].sort((a, b) => a.name.localeCompare(b.name));
    return nomSorted;
});

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>