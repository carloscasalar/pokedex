'use strict';

module.exports = function(Pokemon) {
  Pokemon.validatesLengthOf('tipoIds', {
    min: 1,
    max: 2,
    message: {
      min: 'Como máximo se pueden indicar dos tipos de pokemon.',
      max: 'Debe indicarse al menos un tipo de pokemon.',
    }});
};

