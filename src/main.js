// /* Manejo del DOM */
// const pokes = window.POKEMON.pokemon;

window.onload = () => {
    fetch('https://raw.githubusercontent.com/efyguevara/SCL009-data-lovers/master/src/data/pokemon/pokemon.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            const pokes = data.pokemon;

            const container = document.getElementById("contenedor");
            let filteredPokes = pokes;


            const home = document.getElementById("home");
            home.addEventListener("click", () => {
                location.reload(true);
            })

            document.getElementById("tableContainer").style.display = "none";
            container.innerHTML = `<div class="container">    
                                        <h2 text-left">Región Kanto: 151 Pokemon´s.</h2>
                                    </div>`;

            pokes.forEach(element => {
                container.innerHTML +=
                    `<div href="#" id="cardbtn" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
            <div class="row">
                <div class="">    
                    <p class="card-body text-left"><strong>N° ${(element.num)}</strong></p>
                </div>
            </div>        
            <img src="${(element.img)}" class="card-img-top" alt="Imagen no disponible">
            <h5 class="text-center">${(element.name)}</h5>
            <p class="card-body">Tipo: ${(element.type)}</p>
        </div>`
            })

            const selectType = document.getElementById("selectType");

            selectType.addEventListener("change", (event) => {
                document.getElementById("tableContainer").style.display = "none";

                filteredPokes = window.filterType(pokes, event.target.value);

                container.innerHTML = `<div class="container">    
        <h2 text-left">- Pokemons de tipo: ${(selectType.value)}.</h2>
    </div>`;
                filteredPokes.forEach((element) => {
                    container.innerHTML +=
                        `<div href="#" id="cardbtn" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
                <div class="row">
                    <div class="">    
                        <p class="card-body text-left"><strong>N° ${(element.num)}</strong></p>
                    </div>
                </div>        
                <img src="${(element.img)}" class="card-img-top" alt="Imagen no disponible">
                <h5 class="text-center">${(element.name)}</h5>
                <p class="card-body">Tipo: ${(element.type)}</p>
            </div>`
                })
            })


            const pokeOrder = document.getElementById("selectOrder");
            pokeOrder.addEventListener('change', () => {
                document.getElementById("tableContainer").style.display = "none";
                let sortOrder = pokeOrder.value;
                let sortBy = pokeOrder.options[pokeOrder.selectedIndex].getAttribute('data-sort-by');
                let selectionOrder = window.sortpokes(filteredPokes, sortBy, sortOrder);

                container.innerHTML = `<div class="container">    
        <h2 text-left">- Pokemons de tipo: ${(selectType.value)}.</h2>
        <h2 text-left">- Orden: ${pokeOrder.value}</h2>
    </div>`;

                selectionOrder.forEach(element => {
                    container.innerHTML +=
                        `<div href="#" id="cardbtn" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
                    <div class="row">
                        <div class="">    
                            <p class="card-body text-left"><strong>N° ${(element.num)}</strong></p>
                        </div>
                    </div>        
                    <img src="${(element.img)}" class="card-img-top" alt="Imagen no disponible">
                    <h5 class="text-center">${(element.name)}</h5>
                    <p class="card-body">Tipo: ${(element.type)}</p>
                </div>`
                });
            });

            const calculo = document.getElementById("estadisticas");
            calculo.addEventListener('click', () => {
                document.getElementById("tableContainer").style.display = "block";

                const table = document.getElementById("infoPercent");
                let calculado = window.computedStats(pokes);
                let ctx = document.getElementById('myChart');
                let myChart = "";
                container.innerHTML = "";
                table.innerHTML = "";

                let dataChart = calculado.map(element => {
                    return {
                        label: element.type,
                        data: [element.count],
                        borderWidth: 1
                    }
                });

                myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Pokemons por tipo'],
                        datasets: dataChart,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ]},
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
                ctx.innerHTML += myChart;

                calculado.forEach(element => {
                    table.innerHTML +=
                        `<tr class="text-center bg-warning">
                    <th scope="row"></th>
                    <td>${element.type}</td>
                    <td>${element.count}</td>
                    <td>${element.percent}%</td>
                </tr>`

                });
            })
        })
}