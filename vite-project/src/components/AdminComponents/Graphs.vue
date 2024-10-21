<template>
    <div class="card">
        <h1 class="h1">Statistiques Entreprise</h1>
        <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from 'primevue/chart';

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
        
const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Rentabilité',
                data: [65, 59, 80, 50, 56, 95, 40],
                fill: false,
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--p-cyan-500')
            },
            {
                label: 'Nombres de véhicules accidentés',
                data: [2, 1, 4, 1, 5, 2, 6],
                fill: false,
                borderDash: [5, 5],
                tension: 0.4,
                borderColor: documentStyle.getPropertyValue('--p-orange-500')
            },
            {
                label: 'Nombres de vehicules loués',
                data: [65, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                tension: 0.4,
                backgroundColor: 'rgba(107, 114, 128, 0.2)'
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}
</script>

<style scoped>
.card {
    background: linear-gradient(135deg, rgba(199, 241, 242) 0%, rgb(245, 226, 187) 100%);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    margin: 40px auto;
}
</style>