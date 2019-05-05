
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const pokemons = () => {
//return 'pokemons';
// };

      

let filterType = (pokes, condition) => {
  let filterTypeResult = pokes.filter( element => {
    return element.type === condition
  })
    return filterTypeResult;

}
window.filterType = filterType


function sortpokes(pokes,selection){
  let orderedPokes = pokes;
  if (selection == "a-z"){
      orderedPokes.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
      })
  }
  if(selection == "z-a"){
      orderedPokes.sort(function(a, b){
          if(a.name > b.name) { return -1; }
          if(a.name < b.name) { return 1; }
          return 0;
      })
  }     
  
  return orderedPokes;
}


// al final declaramos todos lo window.(....) que sean necesarios para hacer globales todas las funciones

// let sortData = (pokes, sortBy) => {
//   console.log(sortData); 

//   if (sortBy == 'a-z') {

//     return pokes.sortData((a, b) => {
//       if (a.name > b.name) {
//         return 1;
//       }
//       if (a.name < b.name) {
//         return -1;
//       }
//       return 0;
//     });
//   }

//   if (sortBy == 'z-a') {
    
//     return sortData.reverse();
//     return pokes.sortData((a, b) => {
//       if (a.name < b.name) {
//         return 1;
//       }
//       if (a.name > b.name) {
//         return -1;
//       }
//       return 0;
//     });
//   }
// }







 /*
al hacer click en select se hace un addeventlistener que retorne el objeto
en vez de retornar lo que seleccionamos, que retorne todos los pokemons que tienen esa carateristica
display None display block
luego se imprime se guarda el resultado cpon un arreglo
en el index colocar un div con id="xxx" donde se va a hacer el innerHeight.html para que se muestre
*/

//  ["Grass", "Poison", "Fire", "Flying", "water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock","Gost", "Ice", "Dragon"]; 