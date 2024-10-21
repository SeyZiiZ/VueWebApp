import { createRouter, createWebHistory } from 'vue-router';
import LandingPageComponent from './components/LandingPageComponent.vue'; // Page d'accueil
import Login from './Login.vue'; // Page de connexion
import CarsPage from './CarsPage.vue';
import userPage from './userPage.vue';
import AdminDashboard from './AdminDashboard.vue'
import Register from './Register.vue';
import path from 'path';

const routes = [
    {
        path: '/',
        redirect: '/Acceuil'
    },
    {
        path: '/Acceuil',
        name: 'Home',
        component: LandingPageComponent
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Catalogue',
        name: 'Catalog',
        component: CarsPage
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: userPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/Dashboard/Admin',
        name: 'Admin Dashboard',
        component: AdminDashboard,
        meta: {requiresAuth: true}
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        redirect: "/Acceuil"
    },
    {
        path: '/Register',
        name: 'Regiser',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token'); // Vérifie si un token est présent

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        // Si la route nécessite une authentification et que l'utilisateur n'est pas authentifié
        next('/Login'); // Redirige vers la page de login
    } else {
        next(); // Autorise la navigation
    }
});

export default router;