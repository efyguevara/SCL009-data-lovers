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

  // <div class="card" style="width: 18rem;">
  //<img src="..." class="card-img-top" alt="...">
  //<div class="card-body">
    //<h5 class="card-title">Card title</h5>
    //<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //<a href="#" class="btn btn-primary">Go somewhere</a>
  //</div>
  //`<div id= "each-card" class="card" style= "width: 18rem;">
   //<img src="${(pokes[i].img)}" class="card-img-top" alt="${(pokes[i].name)}>
   //<h5 class="card-litle"> ${(pokes[i].type)}</h5>
   //</div>`

//</div>

       /* ` <p> ${pokes[i].name} </p>` 
            
             
            
  /* document.getElementById("root").innerHTML +=
   `
   <div id= "each-card" class="card" style= "width: 18rem;">
   <img src="${(pokes[i].img)}" class="card-img-top" alt="${(pokes[i].name)}>
   <h5 class="card-litle"> ${(pokes[i].name)}</h5>
   </div>
`*/


    }
}


  
// const name = ["Stefy", "Caro", "Fernanda", "Rossana"];
// const container = document.getElementById("ruta");
// console.log(container);
// for(let i = 0; i < name.length; i++){
//     console.log(name[i])
//     container.innerHTML += `<p> ${name[i]} </p>`;
// }