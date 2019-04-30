/* Manejo del DOM */
//función que muestra
const pokes = POKEMON.pokemon;

window.onload = () => { 
    //document.getElementById("root").innerHTML=``;
        for(let i = 0; i < pokes.length; i++){
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
          
        }}


let selectType = document.getElementById("selectType");
let container = document.getElementById("contenedor");
selectType.addEventListener("change", () => {

let condition = selectType.options
[selectType.selectedIndex].text;
console.log(condition);
})