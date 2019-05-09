/* Manejo de data */
const filterType = (pokes, condition) => {
  let filterTypeResult = pokes.filter(element => {
    return element.type === condition
  })
    return filterTypeResult;
}

const sortpokes = (filteredPokes, sortBy, sortOrder) => {
  let orderedPokes = filteredPokes;
  if (sortOrder == "a-z") {
    orderedPokes.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    })
  }
  if (sortOrder == "z-a") {
    orderedPokes.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    })
  }
  return orderedPokes;
}

//haciendo contador para que recorra la data y vaya sumando de acuerdo al tipo encontrado, se guarde la cuenta en el objeto de cada tipo para poder mostrarla en la tabla
const computedStats = (pokes) => {
  let tipos = [];

  pokes.forEach((element) => {
    element.type.forEach(ele => {
      if (!tipos.includes(ele)) {
        tipos.push(ele)
      }
    });
  })

  const data = tipos.map(element => {
    const count = filterType(pokes, element).length
    const percent = count / pokes.length * 100;
    //console.log(`${element} ${count} ${percent}`);
    //console.log({ "type": element, "count": count, "percent": percent.toFixed(2) });

    return { "type": element, "count": count, "percent": percent.toFixed(2) };
  }); 
  return data;
}

window.filterType = filterType;
window.sortpokes = sortpokes;
window.computedStats = computedStats;

const computeStats = (arr) => {
  let result = parseInt(arr.length / 151 * 100);
  return result;
}
window.computeStats = computeStats;
