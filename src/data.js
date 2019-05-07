
let filterType = (pokes, condition) => {
  let filterTypeResult = pokes.filter( element => {
    return element.type === condition
  })
    return filterTypeResult;

}
window.filterType = filterType


let sortpokes = (pokes,sortBy, sortOrder) =>  {
  let orderedPokes = pokes;
  if (sortOrder == "a-z"){
      orderedPokes.sort((a, b) =>{
          if (a[sortBy] < b[sortBy]) { return -1; }
          if (a[sortBy] > b[sortBy]) { return 1; }
          return 0;
      })
  }
  if(sortOrder == "z-a"){
      orderedPokes.sort((a, b ) => {
          if(a[sortBy] > b[sortBy]) { return -1; }
          if(a[sortBy] < b[sortBy]) { return 1; }
          return 0;
      })
  }     
  
  return orderedPokes;
}




























// ver si me sirve este codigo
// let sortData = (pokes, sortBy, type) => {
//   console.log(sortData); 

//   if (sortBy == "A - Z") {

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

// let sortOrder = event.target.value;
        
//          let selectionOrder = pokes.sort((element, nextElement)=> {
//              if (element.name > nextElement.name) {
//                 return 1;
//               }
//               if (element.name < nextElement.name) {
//                 return -1;
//               }
//               return 0;
//          });
//          if(sortOrder === 'z-a'){
//              selectionOrder.reverse();
//          }






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