<template>
    <h1>Se connecter</h1>
    <Inputs 
        @submitCredentials="handleLogin" 
        :errorMessageFromParent="errorMessage" 
        :successMessageFromParent="successMessage" 
    />
</template>

<script setup>
import Inputs from './components/LoginComponents/Inputs.vue'
import { provide, ref, watch } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const errorMessage = ref('');
const successMessage = ref('');
const userName = ref('');

const router = useRouter();

const handleLogin = async ({ username, password }) => {
    errorMessage.value = '';
    successMessage.value = '';

    if (!username || !password) {
        errorMessage.value = 'Veuillez remplir tous les champs';
        return;
    }

    try {
        const response = await axios.post('http://localhost:3000/api/login', {
            email: username,
            password: password
        });

        if (response.status === 200 && response.data.token) {
            successMessage.value = 'Connexion réussie, vous allez être redirigé vers votre espace';
            localStorage.setItem('token', response.data.token);
            userName.value = response.data.prenom;
            const isAdmin = response.data.isAdmin;

            setTimeout(() => {
                if (isAdmin === 1) {
                    router.push('/Dashboard/Admin');
                } else {
                    router.push('/Dashboard');
                }
            }, 1500)
        } else {
            errorMessage.value = 'Erreur lors de la connexion, données incorrectes';
        }
    } catch (error) {
        errorMessage.value = error.response?.data?.message || 'Erreur de connexion avec le serveur';
    }
};
</script>