/* Manejo de data */
const filterType = (pokes, condition) => {
  return pokes.filter((element) => element.type.includes(condition))
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
    console.log(`pokemones de ${element} son ${count} que equivale al ${percent}%`);
    return { "type": element, "count": count, "percent": percent.toFixed(2) };
  });
  return data;
}

window.filterType = filterType;
window.sortpokes = sortpokes;
window.computedStats = computedStats;

