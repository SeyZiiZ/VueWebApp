<template>
    <div class="background-container">
        <div class="title">
            <h1 id="h1h1">Valentin Automobile, l'Art de l'automobile</h1>
        </div>
        <div class="thingContainer">
            <div class="text">
                <h1>Venez conduire l'un de nos modèles surpuissants et amusez-vous le temps d'une journée ou plus.</h1>
            </div>
            <div class="audi">
                <img class="audiRS3" src="../assets/images/audiRS3.png" alt="Photo d'une audi rs3 de presentation">
            </div>
        </div>
    </div>
</template>

<script setup>
import FadeIn from './Transitions/FadeIn.vue';
</script>

<style scoped>
.background-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
}

.title {
    margin: 5.4%;
}
#h1h1 {
    font-size: 3.5rem!important;
}
.thingContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    width: 130%;
    height: auto;
    align-items: center;
    padding: 0px;
    margin-bottom: 300px;
}

.text {
    text-align: center;
}

.audiRS3 {
    width: 100%;
}

@media screen and (max-width: 1600px) {
    .thingContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
        gap: 100px;
    }
    .audiRS3 {
        width: 70%;
    }
    .text {
        padding: 0 20%;
    }
    .title {
        margin: 3%;
    }
}

@media screen and (max-width: 800px) {
    h1 {
        font-size: 2rem;
    }
    .audiRS3 {
        width: 100%;
    }
    .text {
        width: 100%;
    }
}
</style>