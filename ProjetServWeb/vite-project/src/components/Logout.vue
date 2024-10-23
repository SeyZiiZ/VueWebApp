<template>
    <Button @click.prevent="handleClickButton" label="Déconnexion"></Button>
</template>

<script setup>
import Button from 'primevue/button';

const handleClickButton = () => {
    const token = localStorage.clear();
    window.location.reload();
}


</script>