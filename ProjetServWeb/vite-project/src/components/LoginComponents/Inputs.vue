<template>
    <div class="container">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="localUsername" placeholder="Addresse e-mail" />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <InputText v-model="localPassword" placeholder="Mot de passe" />
        </InputGroup>
        <button @click="handleSubmit">Connexion</button>
        <p class="register">
            Pas encore de compte ? <router-link to="/register"> <span class="linkRegister">Cliquez ici</span> </router-link>
        </p>
        <!-- Message d'erreur ou de succès -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';

import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';

import { onMounted, onUnmounted, ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const localUsername = ref('');
const localPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');


const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        handleSubmit();
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
});

const emits = defineEmits(['submitCredentials']);

const props = defineProps(['errorMessageFromParent', 'successMessageFromParent']);

watch(() => props.errorMessageFromParent, (newVal) => {
    errorMessage.value = newVal;
});

watch(() => props.successMessageFromParent, (newVal) => {
    successMessage.value = newVal;
});

const handleSubmit = () => {
    emits('submitCredentials', { username: localUsername.value, password: localPassword.value });
};

</script>

<style scoped>
.container {
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
    padding: 5%;
    border: 1px solid #00000017;
    box-shadow: rgba(100, 100, 111, 0.425) 0px 7px 29px 0px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 7px;
    width: 45vw;
}
.myDiv {
    display: flex;
    flex-direction: column;
}
label {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
}
button {
    font-size: 1.5rem;
    padding: 10px;
    cursor: pointer;
    background-color: #2A3740;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover {
    background-color: #2a3f40;
}
.error {
    color: red;
    font-size: 1.5rem;
    font-family: robo
}
.success {
    color: green;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
}
.register {
    font-size: 1.5rem;
    margin: 0;
}
.linkRegister {
    color: #2A3740;
}

@media screen and (max-width: 800px) {
    .container {
        width: 80vw;
    }
}
</style>
