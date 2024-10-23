<template>
    <div ref="fadeElement">
        <Transition
            enter-active-class="fade-enter-active"
            enter-from-class="fade-enter-from"
            enter-to-class="fade-enter-to"
        >
            <slot v-if="isVisible"></slot>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const fadeElement = ref(null);
const isVisible = ref(false);  
let observer;                   

onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.9) {
                isVisible.value = true;
                observer.unobserve(entry.target);
            }
        });
    });

    if (fadeElement.value) {
        observer.observe(fadeElement.value);
    }
});


onUnmounted(() => {
    if (observer && fadeElement.value) {
        observer.unobserve(fadeElement.value);
    }
});
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 1s ease;
}
.fade-enter-from {
    opacity: 0;
}
.fade-enter-to {
    opacity: 1;
}
</style>
