document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element by its ID
    var ctx = document.getElementById('myChart').getContext('2d');

    // Create a bar chart using Chart.js
    var myChart = new Chart(ctx, {
        type: 'bar', // The type of chart you want to create
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], // Labels for the x-axis
            datasets: [{
                label: 'Appointments Set',
                data: [14, 16, 18, 10, 22], // Sample data for each day of the week
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
