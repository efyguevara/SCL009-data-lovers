/* Manejo del DOM */
const pokes = window.POKEMON.pokemon;
const container = document.getElementById("contenedor");
const imprcalc = document.getElementById("imprcalculo");
let filteredPokes = pokes;


window.onload = () => {

    pokes.forEach(element => {
        imprcalc.innerHTML = "";
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
        imprcalc.innerHTML = "";
        container.innerHTML = "";

        filteredPokes.forEach(element => {
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


    const pokeOrder = document.getElementById("selectOrder");

        pokeOrder.addEventListener('change', () => {
            let sortOrder = pokeOrder.value;
            let selectionOrder = window.sortpokes(filteredPokes, "name", sortOrder); 
            imprcalc.innerHTML = "";
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
            let calculado = window.computedStats(pokes);
            container.innerHTML = "";
                imprcalc.innerHTML  += 
                    `<table class="table table-striped">
                    <h1>Estadísticas por tipo de Pokemon</h1>
                    <thead>
                        <tr class="bg-dark">
                        <th scope="col">#</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-light">
                        <th scope="row">1</th>
                        <td>Normal</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success">    
                        <th scope="row">2</th> 
                        <td>Fire</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">3</th>
                        <td>Water</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success"> 
                        <th scope="row">4</th>
                        <td>Grass</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">5</th>
                        <td>Electric</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success"> 
                        <th scope="row">6</th>
                        <td>Ice</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">7</th>
                        <td>Fighting</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success"> 
                        <th scope="row">8</th>
                        <td>Poison</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">9</th>
                        <td>Ground</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success"> 
                        <th scope="row">10</th>
                        <td>Rock</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">11</th>
                        <td>Flying</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success"> 
                        <th scope="row">12</th>
                        <td>Psychic</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">13</th>
                        <td>Bug</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-success"> 
                        <th scope="row">14</th>
                        <td>Ghost</td>
                        <td></td>
                        <td></td>
                        </tr>
                        <tr class="table-light"> 
                        <th scope="row">15</th>
                        <td>Dragon</td>
                        <td></td>
                        <td></td>
                        </tr>                        
                    </tbody>
                    </table>
                
                    <h1>El ${calculado}% de los pokemons corresponde a este tipo.</h1>`
                
                console.log(calculado);        
    })
}
