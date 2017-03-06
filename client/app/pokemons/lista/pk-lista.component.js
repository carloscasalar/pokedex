(function (app, undefined){
  'use strict';
  app.component('pkLista', {
    bindings:{
      pokemons: '<'
    },
    templateUrl: 'app/pokemons/lista/pk-lista.component.html',
    controller: ['$log', 'ngToast', 'Pokemon', PkListaController]
  });

  function PkListaController($log, ngToast, Pokemon){
    var $ctrl = this;

    $ctrl.togleFavorito = togleFavorito;

    /**
     * Intenta marcar/desmarcar como favorito el pokemon que se le pasa como parámetro.
     * Si lo consigue actualiza el favorito del pokemon por referencia
     * @param {Pokemon} pokemon Id de pokemon a marcar como favorito
     */
    function togleFavorito(pokemon){
        var pokemonActualizar = pokemon.toJSON();
        pokemonActualizar.favorito = !pokemonActualizar.favorito;

        Pokemon.upsert({},pokemonActualizar)
        .$promise
        .then(function(){
          pokemon.favorito = pokemonActualizar.favorito;
          var mensaje = [
            pokemonActualizar.favorito?'Marcado':'Desmarcado',
            pokemon.nombre,
            'como favorito'
          ].join(' ');

          ngToast.success(mensaje);
        })
        .catch(function(err){
          //TODO Parsear lista de errores procedentes del servidor
          ngToast.danger(
            'No se pudo marcar ' + pokemon.nombre + ' como favorito. '+
            'Se puede marcar un máximo de 10 pokemons como favoritos.'
          );
        });
    }
  }

})(angular.module('pokemons.pk-lista'));
