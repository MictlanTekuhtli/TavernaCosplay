// Ejemplo para generar un gráfico usando Chart.js
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('ventasChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Ventas Mensuales',
                data: [30, 20, 50, 40, 60],
                borderColor: '#BB4734',
                fill: false
            }]
        }
    });
});
