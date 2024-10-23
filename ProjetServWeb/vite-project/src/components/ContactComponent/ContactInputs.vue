<template>
    <div class="contact-form-container">
        <h3 class="label">Pourquoi nous contacter ?</h3>
        <div class="input-group">
            <Select v-model="selectedOption" :options="options" optionLabel="name"
                placeholder="Choisissez une option" class="select" />
        </div>

        <div class="input-group">
            <h3 class="label">Description de votre demande</h3>
            <Textarea id="description" v-model="value" rows="5" class="textarea" placeholder="Entrez votre demande"/>
        </div>

        <div class="input-group checkbox-group">
            <h3 class="label">Acceptez-vous d'être recontacté ?</h3>
            <Checkbox v-model="checked" :binary="true" class="checkbox"/>
        </div>

        <div class="button-container">
            <Button label="Envoyer" class="submit-button"/>
        </div>
    </div>
</template>

<script setup>
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';
import { ref } from "vue";

const value = ref(null);
const checked = ref(false);

const selectedOption = ref();
const options = ref([
    { name: 'Problème ?', code: 'PB' },
    { name: 'Question ?', code: 'QS' },
    { name: 'Autre ?', code: 'OT' },
]);
</script>

<style scoped>
.contact-form-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 25px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.425) 0px 7px 29px 0px;
    font-family: 'Arial', sans-serif;
}

.form-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
}

.input-group {
    margin-bottom: 20px;
}

.checkbox-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.checkbox {
    margin-top: 10px;
}

.label {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 8px;
}

.textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #dcdfe3;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
}

.textarea:focus {
    border-color: #007bff;
    background-color: #fff;
}

.select {
    width: 100%;
    border-radius: 8px;
}
</style>
