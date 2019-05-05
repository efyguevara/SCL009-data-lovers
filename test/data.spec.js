global.window = global;
global.assert = require('chai').assert;
require('../src/data/pokemon/pokemon.js');
require('./data.spec.js');


describe('filterType', () => {
  //con este arreglo probare mis tests 
  let data = [
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

//el equal no sirve para testear objetos ni arrays