<template>
    <h1>Inscrivez vous</h1>
    <InputsRegister
        @submitCredentials="handleLogin" 
        :errorMessageFromParent="errorMessage" 
        :successMessageFromParent="successMessage" 
    />
</template>

<script setup>
import InputsRegister from './RegisterComponents/InputsRegister.vue';
import { provide, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const errorMessage = ref('');
const successMessage = ref('');
const userName = ref('');

const router = useRouter();

const handleLogin = async ({firstName, lastName, username, password}) => {
    errorMessage.value = '';
    successMessage.value = '';

    if (!firstName || !lastName || !username || !password) {
        errorMessage.value = 'Veuillez remplir tous les champs';
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/api/register', {
            nom: lastName,
            prenom: firstName,
            email: username,
            password: password
        });

        if (response.status === 201) {
            successMessage.value = 'Inscription réussie, vous allez pouvoir vous connectez';

            setTimeout(() => {
                router.push('/Login');
            }, 1500);

        } else {
            errorMessage.value = "Erreur lors de l'inscription"
        }

    } catch (error) {
        errorMessage.value = error.response?.data?.message || 'Erreur de connexion avec le serveur !';
    }
    
}

</script>