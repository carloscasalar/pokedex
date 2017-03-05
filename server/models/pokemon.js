'use strict';

var _ = require('lodash');

module.exports = function(Pokemon) {
  Pokemon.validatesLengthOf('tipoIds', {
    min: 1,
    max: 2,
    message: {
      min: 'Debe indicarse al menos un tipo de pokemon.',
      max: 'Como máximo se pueden indicar dos tipos de pokemon.',
    }});

  Pokemon.validatesFormatOf('nombre', {
    with: /^[\wÀ-ú]{4,24}$/,
    allowNull: false,
    message: 'El nombre debe ser una única palabra entre 4 y 24 caracteres.',
  });

  Pokemon.validatesUniquenessOf('nombre', {
    message: 'Este pokemon ya lo tienes.',
  });

  Pokemon.validatesLengthOf('descripcion', {
    min: 30,
    message: {
      min: 'La descripción debe ser de al menos 30 caracteres',
    }});

  Pokemon.validateAsync(
    'favorito',
    verificarMaximoNumeroFavoritos,
    {message: 'Puede haber como máximo 10 pokemons favoritos'});

  function verificarMaximoNumeroFavoritos(err, done) {
    var pokemon = this;

    if (!pokemon.favorito) {
      return done();
    }

    var where = {favorito: true};

    if (!_.isNil(pokemon.id)) {
      where.id = {neq: pokemon.id};
    }

    Pokemon.count(where)
    .then(function(numeroFavoritos) {
      if (numeroFavoritos > 9) {
        err();
      }
      done();
    }).catch(function(errorInesperado) {
      console.error('Error inesperado verificando número de favoritos',
        errorInesperado);
      err();
      done();
    });
  }
};

