import { createRouter, createWebHistory } from 'vue-router';
import LandingPageComponent from './components/LandingPageComponent.vue'; // Page d'accueil
import Login from './Login.vue'; // Page de connexion
import CarsPage from './CarsPage.vue';
import userPage from './userPage.vue';
import Contact from './Contact.vue';
import AdminDashboard from './AdminDashboard.vue'
import Register from './Register.vue';
import path from 'path';

const routes = [
    {
        path: '/',
        redirect: '/accueil'
    },
    {
        path: '/accueil',
        name: 'Home',
        component: LandingPageComponent
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/catalogue',
        name: 'Catalog',
        component: CarsPage
    },
    {
        path: '/contact',
        name: '/Contact',
        component: Contact
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: userPage,
        meta: {requiresAuth: true}
    },
    {
        path: '/dashboard/admin',
        name: 'Admin Dashboard',
        component: AdminDashboard,
        meta: {requiresAuth: true}
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        redirect: "/Accueil"
    },
    {
        path: '/register',
        name: 'Regiser',
        component: Register
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token');

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        next('/Login');
    } else {
        next();
    }
});

export default router;