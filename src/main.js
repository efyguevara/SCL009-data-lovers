/* Manejo del DOM */
//función que muestra
const pokes = window.POKEMON.pokemon;
let selectType = document.getElementById("selectType");
let container = document.getElementById("contenedor");
let card = "";
let filteredPokes = pokes; 


window.onload = () => {

    card = pokes.forEach(element => {
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
//cuando agrego el (event) le estoy diciendo que le voy a pasar un evento (es equivalente al element) y tiene dos valores, el origen y el target
selectType.addEventListener("change", (event) => {
    //let condition = selectType.options[selectType.selectedIndex].value;
    //console.log(condition);
   
    //el event es lo que sucedio con el elemento (evento change)
    //el target indica el elemento seleccionado cuando el selecType escuche (que se selecciono una opcion) 
    //value da el valor que tiene el elemento seleccionado
    filteredPokes = pokes.filter((element) => element.type.includes(event.target.value));
    container.innerHTML = "";

    filteredPokes.forEach(element => {
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
    }
)})


const pokeOrder = document.getElementById("selectOrder");

      pokeOrder.addEventListener('change', () => {
        let selection = pokeOrder.value;
         let selectionOrder = sortpokes(filteredPokes,selection); 
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
// function sortpokes(pokes,selection){
//     var orderedPokes = pokes;
//     if (selection == "a-z"){
//         orderedPokes.sort(function(a, b){
//             if(a.name < b.name) { return -1; }
//             if(a.name > b.name) { return 1; }
//             return 0;
//         })
//     }
//     if(selection == "z-a"){
//         orderedPokes.sort(function(a, b){
//             if(a.name > b.name) { return -1; }
//             if(a.name < b.name) { return 1; }
//             return 0;
//         })
//     }     
    
//     return orderedPokes;
//}
