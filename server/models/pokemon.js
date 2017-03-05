'use strict';

module.exports = function(Pokemon) {
  Pokemon.validate('maximoNumeroTipos', maximoTiposValidador, {
    message: 'Como máximo se pueden indicar dos tipos de pokemon.'
  });

  Pokemon.validate('minimoNumeroTipos', minimoTiposValidador, {
    message: 'Debe indicarse al menos un tipo de pokemon.'
  });

  function maximoTiposValidador(err) {
    if (this.tipoIds &&  this.tipoIds.length > 2) {
      err();
    }
  }

  function minimoTiposValidador(err) {
    if (!this.tipoIds || this.tipoIds.length === 0) {
      err();
    }
  }
};

