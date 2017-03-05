(function (app, undefined){
  'use strict';
  app.component('pkLista', {
    bindings:{
      pokemons: '<'
    },
    templateUrl: 'app/pokemons/lista/pk-lista.component.html'
  });
})(angular.module('pokemons.pk-lista'));
