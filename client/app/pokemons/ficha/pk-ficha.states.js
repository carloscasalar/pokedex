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
        template: '<pk-ficha pokemon="$resolve.pokemon" tipos="$resolve.tipos" evoluciones="$resolve.evoluciones" solo-lectura="false"></pk-ficha>',
        resolve: {
          pokemon: ['$log','$stateParams','Pokemon', _getPokemon],
          evoluciones: ['$log','$stateParams','Pokemon', _getEvoluciones],
          tipos: ['$log','Tipo', _getTipos]
        }
      })
      .state('ficha-crear', {
        url: '/nuevo-pokemon',
        template: '<pk-ficha tipos="$resolve.tipos" evoluciones="$resolve.evoluciones" solo-lectura="false"> </pk-ficha>',
        resolve: {
          evoluciones: ['$log','$stateParams','Pokemon', _getEvoluciones],
          tipos: ['$log','Tipo', _getTipos]
        }
      });
  }

  function _getPokemon($log, $stateParams, Pokemon){
    return Pokemon.findById({
                id: $stateParams.pokemonId,
                filter: {
                  include: ['tipos','evolucion']
                }
              })
              .$promise
              .then(function(pokemon){
                return pokemon.toJSON();
              })
              .catch(function(err){
                //TODO Mostrar notificación de error
                $log.error('Error inesperado recuperando detalle de un pokemon', err);
                return {};
              });
  }

  function _getEvoluciones($log, $stateParams, Pokemon){
    var filtro = {
      fields: {
        id: true,
        nombre: true
      },
      order: 'nombre ASC'
    };

    // Se excluye de las evoluciones el propio pokemon
    if (angular.isDefined($stateParams.pokemonId)) {
      filtro.where = {
        id: {neq: $stateParams.pokemonId}
      }
    }

    return Pokemon.find({filter:filtro})
           .$promise
           .then(function(evoluciones){
             return _limpiarListaResources(evoluciones);
           })
           .catch(function (err){
             //TODO Mostrar notificación de error
             $log.error('Error inesperado consultando posibles evoluciones', err);
             return [];
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
              return _limpiarListaResources(tipos);
            })
            .catch(function(err){
              //TODO Mostrar notificación de error
              $log.error('Error inesperado consultando lista de tipos de pokemon', err);
              return []
            });
  }

  /**
   * Limpia de los elementos de la lista los atributos que son funciones
   * @param {array} listaResources Lista procedente de una consulta con ngResource
   */
  function _limpiarListaResources(listaResources){
    return listaResources.map(function(resource){
      return resource.toJSON();
    });
  }
})(angular.module('pokemons.pk-ficha'));
