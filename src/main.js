/* Manejo del DOM */
const pokes = window.POKEMON.pokemon;
const container = document.getElementById("contenedor");
let filteredPokes = pokes;


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
            let selectionOrder = sortpokes(filteredPokes,"name", sortOrder); 
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
}