/*------- Menu de nevegación lareral -----*/
// Captura de los eventos 
const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
// Función para colabsar o ezpandir menu de nevegación
btn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");

    document.querySelector('body').classList.toggle('body-expanded');
});


var ctx1 = document.getElementById("myChart1").getContext("2d");
var myChart1 = new Chart(ctx1, {
    type: "line",
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        datasets: [{

            data: [30, 51, 19, 10, 3],
            backgroundColor: [
                '#9B51E0',
                
            ]
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        
    }
});


var ctx2 = document.getElementById("myChart2").getContext("2d");
var myChart2 = new Chart(ctx2, {
    type: "doughnut",
    data: {
        labels: ['Aforo', 'Libre'],
        datasets: [{

            data: [30, 51],
            backgroundColor: [
                '#9B51E0',
                '#BDBDBD'
            ]
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
    }
});



var ctx = document.getElementById("myChart3").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
        datasets: [{

            data: [30, 51, 19, 10, 3],
            backgroundColor: [
                '#9B51E0',
                '#363740',
                '#96E051',
                '#5196E0',
                '#E09B51'
            ]
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
    }
});

