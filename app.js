
const ctx = document.getElementById('myChart');

// Chart.defaults.backgroundColor = 'red';
// Chart.defaults.borderColor = '#36A2EB';
// Chart.defaults.color = 'green';
// Chart.defaults.font.size = 20;

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         plugins: {
//             legend: {
//                 labels: {
//                     // This more specific font property overrides the global property
//                     font: {
//                         size: 14
//                     }
//                 }
//             }
//         }
//     }
// });

// new Chart(ctx, {
//     type: "bar",
//     data: {
//         labels: ['A', 'B', 'C'],
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 data: [1, 2, 3],
//                 borderColor: '#36A2EB',
//                 backgroundColor: '#9BD0F5',
//             },
//             {
//                 label: 'Dataset 2',
//                 data: [2, 3, 4],
//                 borderColor: '#FF6384',
//                 backgroundColor: '#FFB1C1',
//             },
//             {
//                 label: "Dataset 3",
//                 data: [3,4,5],
//                 borderColor: "black",
//                 backgroundColor: "green"
//             }
//         ]
//     }
// })

// new Chart(ctx, {
//     type: 'line',
//     data: {
//         datasets: [{
//             label: "Dataset 1",
//             data: [{ x: '2016-12-25', y: 20 }, { x: '2016-12-26', y: 10 }]
//         }]
//     }
// })

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             label: "Bar - 1",
//             data: [{ x: 'Sales', y: 20 }, { x: 'Revenue', y: 10 }]
//         }]
//     }
// })

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         datasets: [{
//             data: [{ id: 'Sales', nested: { value: 1500 }, name: "Sales Name" }, { id: 'Purchases', nested: { value: 500 }, name: "Purchases Name" }]
//         }]
//     },
//     options: {
//         parsing: {
//             xAxisKey: 'name',
//             yAxisKey: 'nested.value'
//         }
//     }
// })

// new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         datasets: [{
//             data: [{ id: 'Sales', nested: { value: 1500 } }, { id: 'Purchases', nested: { value: 500 } }]
//         }]
//     },
//     options: {
//         parsing: {
//             key: 'nested.value'
//         }
//     }
// })

// new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(255, 159, 64, 0.2)',
//                 'rgba(255, 205, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(201, 203, 207, 0.2)'
//             ],
//             borderColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(255, 159, 64)',
//                 'rgb(255, 205, 86)',
//                 'rgb(75, 192, 192)',
//                 'rgb(54, 162, 235)',
//                 'rgb(153, 102, 255)',
//                 'rgb(201, 203, 207)'
//             ],
//             borderWidth: 4
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     },
// })

// new Chart(ctx, {
//     type: 'bubble',
//     data: {
//         datasets: [{
//             label: 'First Dataset',
//             data: [{
//                 x: 20,
//                 y: 30,
//                 r: 15
//             }, {
//                 x: 40,
//                 y: 10,
//                 r: 10
//             }, {
//                 x: 20,
//                 y: 20,
//                 r: 5
//             }],
//             backgroundColor: 'orange'
//         }]
//     },
//     options: {}
// })

// new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: [
//             'Red',
//             'Blue',
//             'Yellow',
//             "Green"
//         ],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [300, 50, 100, 200],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(54, 162, 235)',
//                 'rgb(255, 205, 86)',
//                 "green"
//             ],
//             hoverOffset: 4
//         }]
//     },
// })

// new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 80, 81, 56, 55, 40],
//             fill: false,
//             borderColor: 'black',
//             tension: 0.1
//         }]
//     },
// })

// new Chart(ctx, {
//     data: {
//         datasets: [{
//             type: 'bar',
//             label: 'Bar Dataset',
//             data: [10, 20, 30, 40]
//         }, {
//             type: 'line',
//             label: 'Line Dataset',
//             data: [10, 20, 30, 40],
//         }],
//         labels: ['January', 'February', 'March', 'April']
//     },
// })

// new Chart(ctx, {
//     type: 'polarArea',
//     data: {
//         labels: [
//             'Red',
//             'Green',
//             'Yellow',
//             'Grey',
//             'Blue'
//         ],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [11, 16, 7, 3, 14],
//             backgroundColor: [
//                 'rgb(255, 99, 132)',
//                 'rgb(75, 192, 192)',
//                 'rgb(255, 205, 86)',
//                 'rgb(201, 203, 207)',
//                 'rgb(54, 162, 235)'
//             ]
//         }]
//     },
// })

// new Chart(ctx, {
//     type: 'radar',
//     data: {
//         labels: [
//             'Eating',
//             'Drinking',
//             'Sleeping',
//             'Designing',
//             'Coding',
//             'Cycling',
//             'Running'
//         ],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [65, 59, 90, 81, 56, 55, 40],
//             fill: true,
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgb(255, 99, 132)',
//             pointBackgroundColor: 'rgb(255, 99, 132)',
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: 'rgb(255, 99, 132)'
//         }, {
//             label: 'My Second Dataset',
//             data: [28, 48, 40, 19, 96, 27, 100],
//             fill: true,
//             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//             borderColor: 'rgb(54, 162, 235)',
//             pointBackgroundColor: 'rgb(54, 162, 235)',
//             pointBorderColor: '#fff',
//             pointHoverBackgroundColor: '#fff',
//             pointHoverBorderColor: 'rgb(54, 162, 235)'
//         }]
//     },
//     options: {
//         elements: {
//             line: {
//                 borderWidth: 5
//             }
//         }
//     },
// })

new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }, {
                x: 0.5,
                y: 5.5
            }, {
                x : 2,
                y: -2
            }],
            backgroundColor: 'yellow'
        }],
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom'
            }
        }
    }
})
