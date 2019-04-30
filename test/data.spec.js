global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('filterType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterType, 'function');
  });



  let data = [
    {
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ],
      
      "name": "Blastoise",
      "type": [
        "Water"
      ],  
    }
  ]
  it('debería retornar "Blastoise" para el tipo "Water"', () => {
    assert.deepEqual(('data', 'Water'),  {"name": "Bulbasaur","type": ["Grass", "Poison"]});
  });
})


//el equal no sirve para testear objetos ni arrays