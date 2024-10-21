<template>
    <div class="NavBarCard">
        <Menubar :model="items">
            <template #start>
                <img src="../assets/images/logo.png" alt="Logo de la marque" class="logo" />
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();


const items = ref([
    {
        label: 'Acceuil',
        icon: 'pi pi-home',
        command: () => router.push('/Acceuil')
    },
    {
        label: 'A Propos',
        icon: 'pi pi-star'
    },
    {
        label: 'Vehicules',
        icon: 'pi pi-car',
        items: [
            {
                label: 'Touts les véhicules',
                command: () => router.push('/Catalogue')
            },
            {
                label: 'Audi',
            },
            {
                label: 'Bmw',
            },
            {
                label: 'Mercedes',
            },
            {
                label: 'Porsche',
            },
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    },
    {
        label: 'Connexion',
        icon: 'pi pi-user',
        command: () => router.push('/Login')
    }
]);
</script>

<style scoped>
.p-menubar {
    background-color: transparent;
    width: 100%;
    border: 1px solid #00000017;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.logo {
    height: 40px;
}
</style>