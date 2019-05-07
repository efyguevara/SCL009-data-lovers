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
      "type": "Water"  
    }
  ]
  
  it('debería ser una función', () => {
    assert.equal(typeof filterType, 'function');
  });

  it('debería retornar el objeto "Blastoise" cuando filtro por tipo "Water"', () => {
    assert.deepEqual(window.filterType(data, 'Water'), [{"name": "Blastoise", "type": "Water"}]);
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
    assert.deepEqual(window.sortpokes(dataOrder, "name", 'a-z'), [{"name": "Bulbasaur", "type": ["Grass", "Poison"]}, {"name": "Kakuna", "type": ["Bug", "Poison"]}]);
  });

  it('debería retornar el objeto "Kakuna, Bulbasaur" cuando se ordene "Z - A"', () => {
    assert.deepEqual(window.sortpokes(dataOrder, "name", 'z-a'), [{"name": "Kakuna", "type": ["Bug", "Poison"]}, {"name": "Bulbasaur", "type": ["Grass", "Poison"]}]);
  });
})