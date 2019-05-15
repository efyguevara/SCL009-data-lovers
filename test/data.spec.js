global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

//con este arreglo probare mis tests 
describe('filterType', () => {
  const data = [
    {
      "name": "Bulbasaur",
      "type": ["Grass", "Poison"]
    },
    { 
      "name": "Blastoise",
      "type": ["Water"]  
    }
  ]
  
  it('debería ser una función', () => {
    assert.equal(typeof filterType, 'function');
  });

  it('debería retornar el objeto "Blastoise" cuando filtro por tipo "Water"', () => {
    assert.deepEqual(window.filterType(data, 'Water'), [{"name": "Blastoise", "type": ["Water"]}]);
  });
})

describe('sortpokes', () => {
  const dataOrder = [
    {
      "name": "Bulbasaur",
      "type": ["Grass", "Poison"]
    },
    { 
      "name": "Kakuna",
      "type": ["Bug", "Poison"]  
    }
  ]  

  it('debería ser una función', () => {
    assert.equal(typeof sortpokes, 'function');
  });

  it('debería retornar el objeto "Bulbasaur, Kakuna" cuando se ordene "A - Z"', () => {
    assert.deepEqual(window.sortpokes(dataOrder, "name", 'A - Z'), [{"name": "Bulbasaur", "type": ["Grass", "Poison"]}, {"name": "Kakuna", "type": ["Bug", "Poison"]}]);
  });

  it('debería retornar el objeto "Kakuna, Bulbasaur" cuando se ordene "Z - A"', () => {
    assert.deepEqual(window.sortpokes(dataOrder, "name", 'Z - A'), [{"name": "Kakuna", "type": ["Bug", "Poison"]}, {"name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
  });
})


describe('computedStats', () => {
  const dataCalc = [
    {
      "name": "Bulbasaur",
      "type": ["Grass", "Poison"]
    },
    { 
      "name": "Blastoise",
      "type": ["Water"]  
    },
    { 
      "name": "Kakuna",
      "type": ["Bug", "Poison"]  
    }
  ]

  it('debería ser una función', () => {
    assert.equal(typeof computedStats, 'function');
  });
  
  it('debería retornar los objetos "[{type: "Grass", count: 1, percent: "33.33"}, {type: "Poison", count: 2, percent: "66.66"}, {type: "Water", count: 1, percent: "33.33"}, {type: "Bug", count: 1, percent: "33.33"}]" cuando haga click en el boton "estadisticas"', () => {
    assert.deepEqual(window.computedStats(dataCalc), [{type: "Grass", count: 1, percent: "33.33"}, {type: "Poison", count: 2, percent: "66.67"}, {type: "Water", count: 1, percent: "33.33"}, {type: "Bug", count: 1, percent: "33.33"}]);
  });
})