(function (app, undefined){
  'use strict';
  app.config(['$stateProvider', estadosPkLista]);

  function estadosPkLista($stateProvider){
    $stateProvider.state('lista', {
      url:'/lista',
      template: '<pk-lista pokemons="$resolve.pokelista"></pk-lista>',
      resolve: {
        pokelista: ['$log','Pokemon', function($log, Pokemon){
          return Pokemon.find({
                      filter: {
                        include: 'tipos'
                      }
                    })
                    .$promise
                    .then(function(pokemons){
                      return pokemons;
                    })
                    .catch(function(err){
                      //TODO Mostrar notificación de error
                      $log.error('Error inesperado recuperando lista de pokemons', err);
                      return [];
                    });
        }]
      }
    });
  }
})(angular.module('pokemons.pk-lista'));
