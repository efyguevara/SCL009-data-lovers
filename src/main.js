/* Manejo del DOM */
const pokes = window.POKEMON.pokemon;
const container = document.getElementById("contenedor");
let filteredPokes = pokes;

const home = document.getElementById("home");
home.addEventListener("click", () => {
    location.reload(true);
})


window.onload = () => {
    document.getElementById("tableContainer").style.display = "none";
    container.innerHTML = `<div class="container">    
        <h2 text-left">Región Kanto: 151 Pokemon´s.</h2>
    </div>`;

    pokes.forEach(element => {
        container.innerHTML +=
            `<div href="#" id="cardbtn"${(element.num)}" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
                <div class="row">
                    <div class="">  
                        <p class="card-body text-left">N° ${(element.num)}</p>
                    </div>
                </div>        
                <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                <h3 class="card-body">${(element.name)}</h3>
                <p class="card-body">Tipo: ${(element.type)}</p>
            </div>`
    })

   const selectType = document.getElementById("selectType");
    //cuando agrego el (event) le esttypeoy diciendo que le voy a pasar un evento (es equivalente al element) y tiene dos valores, el origen y el target
    selectType.addEventListener("change", (event) => {
        document.getElementById("tableContainer").style.display = "none";
        //el event es lo que sucedio con el elemento (evento change)
        //el target indica el elemento seleccionado cuando el selecType escuche (que se selecciono una opcion) 
        //value da el valor que tiene el elemento seleccionado
        filteredPokes = window.filterType(pokes, event.target.value);
        tableContainer = "";
        container.innerHTML = `<div class="container">    
        <h2 text-left">Pokemons de tipo: ${(selectType.value)}.</h2>
    </div>`;
        filteredPokes.forEach((element) => {
            container.innerHTML +=
                `<div href="#" id="cardbtn-${(element.num)}" class="col-sm-12 col-md-4 col-lg-2 text-center cards ">
                    <div class="row">
                        <div class="">    
                            <p class="card-body text-left">N° ${(element.num)}</p>
                        </div>
                    </div>        
                    <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                    <h3 class="card-body">${(element.name)}</h3>
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
        tableContainer = "";
        container.innerHTML = `<div class="container">    
        <h2 text-left">Pokemons de tipo: ${(selectType.value)} - Orden: ${pokeOrder.value}</h2>
    </div>`;
        
        selectionOrder.forEach(element => {
            container.innerHTML +=
                `<div href="#" id="cardbtn-${(element.num)}" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
                    <div class="row">
                        <div class="">    
                            <p class="card-body text-left">N° ${(element.num)}</p>
                        </div>
                    </div>        
                    <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                    <h3 class="card-body">${(element.name)}</h3>
                    <p class="card-body">Tipo: ${(element.type)}</p>
                </div>`
        });
    });

    const calculo = document.getElementById("estadisticas");
    calculo.addEventListener('click', () => {
        document.getElementById("tableContainer").style.display = "block";    
        const table = document.getElementById("infoPercent");
        let calculado = window.computedStats(pokes);

        container.innerHTML = "";
        table.innerHTML = "";

        calculado.forEach(element => {
            table.innerHTML +=
                `<tr class="table-danger">
                    <th scope="row"></th>
                    <td>${element.type}</td>
                    <td>${element.count}</td>
                    <td>${element.percent}%</td>
                </tr>`
        });
    })
}