<template>
    <div class="container">
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-user"></i>
            </InputGroupAddon>
            <InputText v-model="localFirstName" placeholder="Prénom" />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-users"></i>
            </InputGroupAddon>
            <InputText v-model="localLastName" placeholder="Nom de famille" />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-inbox"></i>
            </InputGroupAddon>
            <InputText v-model="localUsername" placeholder="Addresse e-mail" />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <InputText v-model="localPassword" placeholder="Mot de passe" />
        </InputGroup>
        <InputGroup>
            <InputGroupAddon>
                <i class="pi pi-lock"></i>
            </InputGroupAddon>
            <InputText v-model="localPasswordRewrite" placeholder="Confirmez le mot de passe" />
        </InputGroup>
        <button @click="handleSubmit">S'inscrire</button>
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

const localFirstName = ref('');
const localLastName = ref('');
const localUsername = ref('');
const localPassword = ref('');
const localPasswordRewrite = ref('');
const errorMessage = ref('');
const successMessage = ref('');


const arePasswordsIdentical = () => {
    return localPassword.value === localPasswordRewrite.value;
};

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

    if (!arePasswordsIdentical()) {
        errorMessage.value = 'Erreur, Les mots de passes ne correspondent pas';
        return;
    }

    errorMessage.value = '';
    emits('submitCredentials', {
        firstName: localFirstName.value, 
        lastName: localLastName.value, 
        username: localUsername.value, 
        password: localPassword.value 
    });
};

</script>

<style scoped>
.container {
    height: auto;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
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
    font-family: Arial, Helvetica, sans-serif;
}
.success {
    color: green;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
}
</style>
