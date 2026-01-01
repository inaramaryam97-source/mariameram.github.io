// GDP Contribution Chart
const ctx1 = document.getElementById('gdpChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Aviation GDP Contribution (RM Billion)',
            data: [45, 30, 40, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    }
});

// Hub Comparison Chart
const ctx2 = document.getElementById('hubComparison').getContext('2d');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['KLIA', 'Changi', 'Suvarnabhumi'],
        datasets: [{
            label: 'Passenger Traffic (Millions)',
            data: [50, 70, 60],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    }
});