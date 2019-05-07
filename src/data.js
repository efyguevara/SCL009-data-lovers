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
          if (a[sortBy] < b[sortBy]) { return -1; }
          if (a[sortBy] > b[sortBy]) { return 1; }
          return 0;
      })
  }
  if(sortOrder == "z-a"){
      orderedPokes.sort((a, b) => {
          if(a[sortBy] > b[sortBy]) { return -1; }
          if(a[sortBy] < b[sortBy]) { return 1; }
          return 0;
      })
  }     
  return orderedPokes;
}

window.filterType = filterType;
window.sortpokes = sortpokes;

