/* Manejo del DOM */
//función que muestra
const pokes = POKEMON.pokemon;

window.onload = () => {
    //document.getElementById("root").innerHTML=``;
    for (let i = 0; i < pokes.length; i++) {
        document.getElementById("contenedor").innerHTML +=
            `<div class="col-sm-12 col-md-4 col-lg-2 text-center ">
            <div id="each-card" class="card text-center">
                <div class="row">
                    <div class="col-6">    
                        <p class="col card-body text-left">N° ${(pokes[i].num)}</p>
                    </div>
                    <div class="form-check offset-2 col-4 ">
                        <input class="form-check-input" type="checkbox" value="" id="checkCompare">
                    </div>
                    
                </div>        
                <img src="${(pokes[i].img)}" class="card-img-top" alt="${(pokes[i].num)}>
                <h3 class="card-body">${(pokes[i].name)}</h3>
                <p class="card-body">Tipo: ${(pokes[i].type)}</p>
            </div>
        </div>`
    }
}

let selectType = document.getElementById("selectType");
let container = document.getElementById("contenedor");

//cuando agrego el (event) le estoy diciendo que le voy a pasar un evento (es equivalente al element) y tiene dos valores, el origen y el target
selectType.addEventListener("change", (event) => {
    // let condition = selectType.options[selectType.selectedIndex].value;
    // console.log(condition); 

    //el event es lo que sucedio con el elemento (evento change)
    //el target indica el elemento seleccionado cuando el selecType escuche (que se selecciono una opcion) 
    //value da el valor que tiene el elemento seleccionado
    let filter = pokes.filter((element) => element.type.includes(event.target.value));
    container.innerHTML = "";

    filter.forEach(element => {
        container.innerHTML +=
            `<div class="col-sm-12 col-md-4 col-lg-2 text-center ">
                <div id="each-card" class="card text-center">
                    <div class="row">
                        <div class="col-6">    
                            <p class="col card-body text-left">N° ${(element.num)}</p>
                        </div>
                        <div class="form-check offset-2 col-4 ">
                            <input class="form-check-input" type="checkbox" value="" id="checkCompare">
                        </div>
                        
                    </div>        
                    <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                    <h3 class="card-body">${(element.name)}</h3>
                    <p class="card-body">Tipo: ${(element.type)}</p>
                </div>
            </div>`
    }
)})

const pokeOrder = document.getElementById("selectOrder");

      pokeOrder.addEventListener('change', () => {
        
         let selectionOrder = pokes.sort((element)=> element.name.includes(event.target.value)); 
         container.innerHTML = "";
         console.log(selectionOrder);
         
         selectionOrder.forEach(element => { 
             container.innerHTML += 
             `<div class="col-sm-12 col-md-4 col-lg-2 text-center ">
             <div id="each-card" class="card text-center">
                 <div class="row">
                     <div class="col-6">    
                         <p class="col card-body text-left">N° ${(element.num)}</p>
                     </div>
                     <div class="form-check offset-2 col-4 ">
                         <input class="form-check-input" type="checkbox" value="" id="checkCompare">
                     </div>
                     
                 </div>        
                 <img src="${(element.img)}" class="card-img-top" alt="${(element.num)}>
                 <h3 class="card-body">${(element.name)}</h3>
                 <p class="card-body">Tipo: ${(element.type)}</p>
             </div>
         </div>`
         });
      });