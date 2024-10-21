<template>
    <div class="container">
        <h1>Récap Agence</h1>
        <div class="stats">
            <div class="stat-item">
                <h2>Total Véhicules Agence</h2>
                <p>{{ totalVoitures }}</p>
                <ul>
                    <li v-for="voiture in infosVoitures" :key="voiture.id">
                        <small>{{ voiture.name }}</small>
                    </li>
                </ul>
            </div>
            <div class="stat-item">
                <h2>Total véhicules loués</h2>
                <p>{{ totalLoues }}</p>
                <ul>
                    <li v-for="voiture in infosVoitures" :key="voiture.id">
                        <small v-if="!voiture.isAvailable">{{ voiture.name }}</small>
                    </li>
                </ul>
            </div>
            <div class="stat-item">
                <h2>Total véhicules non loués</h2>
                <p>{{ totalVoitures - totalLoues }}</p>
                <ul>
                    <li v-for="voiture in infosVoitures" :key="voiture.id">
                        <small v-if="voiture.isAvailable">{{ voiture.name }}</small>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container2">
        <h1>Récap véhicules : </h1>
        <div class="containerDiv">
            <h2>Les Véhicules les plus louées :</h2>
            <ul v-for="(voiture, index) in plusLoues" :key="voiture">
                <li> {{ index + 1 }} → {{ voiture.name }} Avec {{ voiture.timesRented }} Locations</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue';
import voituresInfos from '../../../composables/voitures.json';

const infosVoitures = ref([]);
const totalVoitures = ref(0);

onMounted(() => {
    infosVoitures.value = voituresInfos;
    totalVoitures.value = infosVoitures.value.length;
});


const totalLoues = computed(() => {
    return infosVoitures.value.filter(voiture => !voiture.isAvailable).length;
});

const plusLoues = computed(() => {
    const voituresTrie = [...infosVoitures.value].sort((a, b) => b.timesRented - a.timesRented);
    return voituresTrie;
});

</script>

<style scoped>
.container, .container2 {
    max-width: 900px;
    margin: 50px auto;
    padding: 30px;
    background-color: #f4f4f950;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    font-size: 2.2rem;
    margin-bottom: 25px;
    color: #333;
}

.stats, .stats-vehicules {
    display: flex;
    justify-content: space-between;
    gap: 30px;
}

.stat-item, .stat-vehicule-item {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    flex: 1;
    text-align: left;
}

.stat-item h2, .stat-vehicule-item h2 {
    font-size: 1.5rem;
    color: #444;
    margin-bottom: 15px;
}

.stat-item p, .stat-vehicule-item p {
    font-size: 2rem;
    font-weight: bold;
    color: #222;
    margin-bottom: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

ul li {
    margin-bottom: 8px;
}

ul li small, ul li {
    font-size: 0.9rem;
    color: #555;
}

ul li small::before {
    content: '• ';
    color: #888;
}

ul li small v-if {
    color: #b00;
}

/* Spécifique au container2 */
.container2 {
    margin-top: 40px;
    background-color: whitesmoke!important;
}

.container2 ul {
    text-align: left;
}

.container2 ul li {
    font-size: 1rem;
    color: #222;
}

.container2 ul li::before {
    color: #888;
}
.containerDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>