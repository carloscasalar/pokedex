(function (app, undefined){
  'use strict';
  app.config(['$stateProvider', estadosPkLista]);

  function estadosPkLista($stateProvider){
    $stateProvider
      .state('ficha', {
        url:'/pokemons/{pokemonId}',
        params: {
          pokemonId: null
        },
        template: '<pk-ficha pokemon="$resolve.pokemon" tipos="$resolve.tipos" solo-lectura="true"></pk-ficha>',
        resolve: {
          pokemon: ['$log','$stateParams','Pokemon', _getPokemon],
          tipos: ['$log','Tipo', _getTipos]
        }
      })
      .state('ficha-editar', {
        url: '/pokemons/{pokemonId}/editar',
        params: {
          pokemonId: null
        },
        template: '<pk-ficha pokemon="$resolve.pokemon" tipos="$resolve.tipos" solo-lectura="false"></pk-ficha>',
        resolve: {
          pokemon: ['$log','$stateParams','Pokemon', _getPokemon],
          tipos: ['$log','Tipo', _getTipos]
        }
      })
      .state('ficha-crear', {
        url: '/nuevo-pokemon',
        template: '<pk-ficha tipos="$resolve.tipos" solo-lectura="false"> </pk-ficha>',
        resolve: {
          tipos: ['$log','Tipo', _getTipos]
        }
      });
  }

  function _getPokemon($log, $stateParams, Pokemon){
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
  }

  function _getTipos($log, Tipo){
    return Tipo.find({
              filter: {
                order: 'nombre ASC'
              }
            })
            .$promise
            .then(function (tipos){
              return tipos;
            })
            .catch(function(err){
              //TODO Mostrar notificación de error
              $log.error('Error inesperado consultando lista de tipos de pokemon', err);
              return []
            });
  }
})(angular.module('pokemons.pk-ficha'));
