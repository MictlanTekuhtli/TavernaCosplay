document.addEventListener('DOMContentLoaded', function () {
    // Gráfica de Ventas
    const salesChartCtx = document.getElementById('salesChart').getContext('2d');
    new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
            datasets: [{
                label: 'Ventas ($)',
                data: [12000, 15000, 18000, 22000, 20000, 24000],
                borderColor: '#BB4734',
                backgroundColor: 'rgba(187, 71, 52, 0.2)',
                tension: 0.1
            }]
        }
    });

    // Gráfica de Órdenes
    const ordersChartCtx = document.getElementById('ordersChart').getContext('2d');
    new Chart(ordersChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Completadas', 'En Proceso', 'Pendientes'],
            datasets: [{
                data: [65, 20, 15],
                backgroundColor: ['#28A745', '#FFC107', '#DC3545']
            }]
        }
    });
});
