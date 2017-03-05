(function (app, undefined){
  'use strict';
  app.config(['$stateProvider', estadosPkLista]);

  function estadosPkLista($stateProvider){
    $stateProvider.state('lista', {
      url:'/lista',
      template: '<pk-lista></pk-lista>'
    });
  }
})(angular.module('pokemons.pk-lista'));
