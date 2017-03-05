(function (app, undefined){
  'use strict';
  app.config(['$stateProvider', estadosPkLista]);

  function estadosPkLista($stateProvider){
    $stateProvider.state('ficha', {
      url:'/pokemons/{pokemonId}',
      params: {
        pokemonId: null
      },
      template: '<pk-ficha pokemon="$resolve.pokemon" tipos="$resolve.tipos" solo-lectura="true"></pk-ficha>',
      resolve: {
        pokemon: ['$log','$stateParams','Pokemon', function($log, $stateParams, Pokemon){
          return Pokemon.findById({
                      id: $stateParams.pokemonId,
                      filter: {
                        include: 'tipos'
                      }
                    })
                    .$promise
                    .then(function(pokemon){
                      return pokemon;
                    })
                    .catch(function(err){
                      //TODO Mostrar notificación de error
                      $log.error('Error inesperado recuperando detalle de un pokemon', err);
                      return {};
                    });
        }],
        tipos: ['$log','Tipo', function ($log, Tipo){
          return Tipo.find()
                  .$promise
                  .then(function (tipos){
                    return tipos;
                  })
                  .catch(function(err){
                    //TODO Mostrar notificación de error
                    $log.error('Error inesperado consultando lista de tipos de pokemon', err);
                    return []
                  });
        }]
      }
    });
  }
})(angular.module('pokemons.pk-ficha'));
