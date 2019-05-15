/* Manejo de data */
const filterType = (pokes, selectedType) => {
  return pokes.filter((element) => element.type.includes(selectedType));
}

const sortpokes = (filteredPokes, sortBy, sortOrder) => {
  let orderedPokes = filteredPokes;
  if (sortOrder == "A - Z" || sortOrder == "Nº ascendente") {
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
  if (sortOrder == "Z - A" || sortOrder == "Nº descendente") {
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

    return { "type": element, "count": count, "percent": percent.toFixed(2) };
  })
  return data;
}

window.filterType = filterType;
window.sortpokes = sortpokes;
window.computedStats = computedStats;


