/* Manejo del DOM */
const pokes = window.POKEMON.pokemon;
const container = document.getElementById("contenedor");
let filteredPokes = pokes;
// let botonFiltros = '';

const home = document.getElementById("home");
home.addEventListener("click", () => {
    location.reload(true);
})


window.onload = () => {
    pokes.forEach(element => {
        container.innerHTML +=
            `<a href="#" id="cardbtn-${(element.num)}" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
                <div class="row">
                    <div class="">    
                        <p class="card-body text-left">N° ${(element.num)}</p>
                    </div>
                </div>        
                <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                <h3 class="card-body">${(element.name)}</h3>
                <p class="card-body">Tipo: ${(element.type)}</p>
            </a>`
    })

   const selectType = document.getElementById("selectType");
    //cuando agrego el (event) le esttypeoy diciendo que le voy a pasar un evento (es equivalente al element) y tiene dos valores, el origen y el target
    selectType.addEventListener("change", (event) => {
        //el event es lo que sucedio con el elemento (evento change)
        //el target indica el elemento seleccionado cuando el selecType escuche (que se selecciono una opcion) 
        //value da el valor que tiene el elemento seleccionado
        filteredPokes = pokes.filter((element) => element.type.includes(event.target.value));
        container.innerHTML = "";

        filteredPokes.forEach((element) => {
            container.innerHTML +=
                `<a href="#" id="cardbtn-${(element.num)}" class="col-sm-12 col-md-4 col-lg-2 text-center cards ">
                    <div class="row">
                        <div class="">    
                            <p class="card-body text-left">N° ${(element.num)}</p>
                        </div>
                    </div>        
                    <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                    <h3 class="card-body">${(element.name)}</h3>
                    <p class="card-body">Tipo: ${(element.type)}</p>
                </a>`
        })        
    })

    // document.getElementById('selectType').innerHTML = botonFiltros;
    // arr.forEach((element) => {
    //     document.getElementById(`${element}`).addEventListener('click', () => {
    //         filteredPokes = window.filterType( pokes,`${element}`);
    //         vaciar();
    //         imprimir(datatype);
    //         document.getElementById('titulos').innerHTML = `<p id="porcentaje" class="${element}">El ${porcentaje}% de los pokemones de la región Kanto son de tipo ${element}.</p>`;
      
//         });
//     })
// };
  

    const pokeOrder = document.getElementById("selectOrder");
    pokeOrder.addEventListener('change', () => {
        let sortOrder = pokeOrder.value;
        let selectionOrder = window.sortpokes(filteredPokes, "name", sortOrder);
        container.innerHTML = "";

        selectionOrder.forEach(element => {
            container.innerHTML +=
                `<a href="#" id="cardbtn-${(element.num)}" class="col-sm-12 col-md-4 col-lg-2 text-center cards">
                    <div class="row">
                        <div class="">    
                            <p class="card-body text-left">N° ${(element.num)}</p>
                        </div>
                    </div>        
                    <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                    <h3 class="card-body">${(element.name)}</h3>
                    <p class="card-body">Tipo: ${(element.type)}</p>
                </a>`
        });
    });

    const calculo = document.getElementById("estadisticas");
    calculo.addEventListener('click', () => {
        const table = document.getElementById("infoPercent");
        let calculado = window.computedStats(pokes);
        container.innerHTML = "";
        table.innerHTML = "";

        calculado.forEach(element => {
            table.innerHTML +=
                `<tr class="table-success">
                    <th scope="row"></th>
                    <td>${element.type}</td>
                    <td>${element.count}</td>
                    <td>${element.percent}%</td>
                </tr>`
        });
    })
}