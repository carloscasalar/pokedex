(function (app, undefined){
  'use strict';
  app.component('pkFicha', {
    bindings:{
      soloLectura: '<',
      pokemonIn: '<pokemon',
      tipos: '<'
    },
    templateUrl: 'app/pokemons/ficha/pk-ficha.component.html',
    controller: ['$log', FichaController]
  });

  function FichaController($log){
    var $ctrl = this;

    $ctrl.$onInit = onInit;

    function onInit(){
      if($ctrl.pokemonIn){
        $ctrl.pokemon = angular.extend({}, $ctrl.pokemonIn);
      }
    }
  }

})(angular.module('pokemons.pk-ficha'));
