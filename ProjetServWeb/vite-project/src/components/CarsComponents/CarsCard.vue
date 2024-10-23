<template>
    <Card style="width: 25rem; overflow: hidden">
        <template #header>
            <img class="imgHeader" :alt="`Image d'une ${props.titleCard}`" :src="`/assets/${props.imageCard}`" />
        </template>
        <template #title>{{ props.titleCard }}</template>
        <template #subtitle>{{ props.subtitleCard }}</template>
        <template #content>
            <p class="m-0">
                {{ props.contentCard }}
            </p>
        </template>
        <template #footer>
            <div class="buttons">
                <button>En Savoir Plus</button>
                <div v-if="props.isAvailable">
                    <button>Louer</button>
                </div>
                <div v-else>
                    <button>Indisponible</button>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import Card from 'primevue/card';

const props = defineProps({
    imageCard: String,
    titleCard: String,
    subtitleCard: String,
    contentCard: String,
    isAvailable: Boolean
});

const getPath = (imageName) => {
    return `./src/assets/images/${imageName}`
}

</script>

<style> 
.imgHeader {
    max-width: 90%;
}
.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}
button {
    background-color: #2A3740;
    color: white;
}
</style>