/* Manejo del DOM */
//función que muestra
const pokes = POKEMON.pokemon;

window.onload = () => { 
    //document.getElementById("root").innerHTML=``;
        for(let i = 0; i < pokes.length; i++){
            document.getElementById("root").innerHTML += 
            `<div id="each-card" class="card" style= "width: 18rem;">
   <img src="${(pokes[i].img)}" class="card-img-top" alt="${(pokes[i].num)}>
   <h5 class="card-body"> ${(pokes[i].type)}</h5>
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