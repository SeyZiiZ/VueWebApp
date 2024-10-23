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
import { ref, onMounted, watch, onUnmounted } from "vue";
import { useRouter } from 'vue-router';
import { jwtDecode } from "jwt-decode";

const router = useRouter();
const items = ref([]);
const token = ref(localStorage.getItem('token'));

const watchToken = () => {
    window.addEventListener('storage', (e) => {
        if (e.key === 'token') {
            token.value = e.newValue;
            initializeMenu();
        }
    });
};

const updateTokenEvent = new Event('tokenUpdated');

const originalSetItem = localStorage.setItem;

localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);
    if (key === 'token') {
        token.value = value;
        window.dispatchEvent(updateTokenEvent);
    }
};


window.addEventListener('tokenUpdated', () => {
    initializeMenu();
});

const initializeMenu = () => {
    let isAdmin = false;
    const currentToken = localStorage.getItem('token');

    if (currentToken) {
        try {
            const decodedToken = jwtDecode(currentToken);
            isAdmin = decodedToken.isAdmin === 1;
        } catch (error) {
            console.error("Erreur de décodage du token:", error);
        }
    }

    const baseMenu = [
        {
            label: 'Accueil',
            icon: 'pi pi-home',
            command: () => router.push('/accueil')
        },
        {
            label: 'A Propos',
            icon: 'pi pi-star'
        },
        {
            label: 'Véhicules',
            icon: 'pi pi-car',
            items: [
                {
                    label: 'Tous les véhicules',
                    command: () => router.push('/catalogue')
                },
                {
                    label: 'Audi',
                    command: () => router.push('/catalogue/audi')
                },
                {
                    label: 'BMW',
                    command: () => router.push('/catalogue/bmw')
                },
                {
                    label: 'Mercedes',
                    command: () => router.push('/catalogue/mercedes')
                },
                {
                    label: 'Porsche',
                    command: () => router.push('/catalogue/porsche')
                },
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            command: () => router.push('/contact')
        }
    ];

    if (currentToken && !isAdmin) {
        baseMenu.push({
            label: 'Mon Compte',
            icon: 'pi pi-user',
            command: () => router.push('/dashboard')
        });
    } else if (currentToken && isAdmin) {
        baseMenu.push({
                label: 'Administration',
                icon: 'pi pi-cog',
                command: () => router.push('/dashboard/admin')
            });
    } else {
        baseMenu.push({
            label: 'Connexion',
            icon: 'pi pi-user',
            command: () => router.push('/login')
        });
    }

    items.value = baseMenu;
};

watch(() => token.value, () => {
    initializeMenu();
});

onMounted(() => {
    initializeMenu();
    watchToken();
});
</script>

<style scoped>
.p-menubar {
    background-color: transparent;
    width: 80vw;
    border: 1px solid #00000017;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.logo {
    height: 40px;
}
</style>