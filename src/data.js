/* Manejo de data */
const filterType = (pokes, condition) => {
  let filterTypeResult = pokes.filter( element => {
    return element.type === condition
  })
    return filterTypeResult;
}

const sortpokes = (filteredPokes, sortBy, sortOrder) =>  {
  let orderedPokes = filteredPokes;
  if (sortOrder == "a-z"){
      orderedPokes.sort((a, b) =>{
          if (a[sortBy] < b[sortBy]){ 
            return -1; 
          }
          if (a[sortBy] > b[sortBy]){
            return 1; 
          }
          return 0;
      })
  }
  if(sortOrder == "z-a"){
      orderedPokes.sort((a, b) => {
          if(a[sortBy] > b[sortBy]) { 
            return -1; 
          }
          if(a[sortBy] < b[sortBy]) { 
            return 1; 
          }
          return 0;
      })
  }     
  return orderedPokes;
}


//haciendo contador para que recorra la data y vaya sumando de acuerdo al tipo encontrado, se guarde la cuenta en la variable de cada tipo para poder mostrarla en la tabla
const computedStats = (pokes) => {
  pokemons = pokes;
  let normal = "";
  let fire = "";
  let water = "";
  let grass = "";
  let electric = "";
  let ice = "";
  let fighting = "";
  let poison = "";
  let ground = "";
  let rock = "";
  let flying = "";
  let psychic = "";
  let bug = "";
  let ghost = "";
  let dragon = "";

  for (let i = 0; i <= pokemons.length; i++) {
    return pokemons.type[i];}
    
    if(pokemons[i] == normal){
      normal = 1;
    }else{normal = 0}

    if(pokemons[i] == fire){
      fire = 1;
    }

  let percentPokeTypes = parseInt(pokes.length /151 * 100);
  return percentPokeTypes;
  }

 




window.filterType = filterType;
window.sortpokes = sortpokes;
window.computedStats = computedStats;


//buscar un contador para ir sumando a cada variable
