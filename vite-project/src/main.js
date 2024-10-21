import './style.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/lara';
import router from './router';
import App from './App.vue';
import AnimateOnScroll from 'primevue/animateonscroll';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    }
});
app.use(router);
app.directive('animateonscroll', AnimateOnScroll);
app.mount('#app')
