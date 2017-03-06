(function (app, undefined){
  'use strict';
  app.component('pkFicha', {
    bindings:{
      soloLectura: '<',
      pokemonIn: '<pokemon',
      tipos: '<'
    },
    templateUrl: 'app/pokemons/ficha/pk-ficha.component.html',
    controller: ['$log','$state','ngToast','Pokemon', FichaController]
  });

  function FichaController($log, $state, ngToast, Pokemon){
    var $ctrl = this;

    $ctrl.$onInit = onInit;
    $ctrl.guardar = guardar;

    function onInit(){
      if($ctrl.pokemonIn && $ctrl.soloLectura){
        $ctrl.modoVer = true;
      }else if($ctrl.pokemonIn && !$ctrl.soloLectura){
        $ctrl.modoEditar = true;
      }else{
        $ctrl.modoCrear = true;
      }

      if($ctrl.pokemonIn){
        $ctrl.pokemon = angular.extend({}, $ctrl.pokemonIn);
      }
    }

    function guardar(){
      Pokemon.patchOrCreate({},{
        id: $ctrl.pokemon.id,
        nombre: $ctrl.pokemon.nombre,
        descripcion: $ctrl.pokemon.descripcion,
        favorito: $ctrl.pokemon.favorito,
        tipoIds: $ctrl.pokemon.tipoIds,
        evolucion: $ctrl.pokemon.evolucion
      })
      .$promise
      .then(function(){
        ngToast.create({
          content: 'Pokemon guardado correctamente',
          dismissButton: true
        });
        $state.go('lista');
      })
      .catch(function(err){
        ngToast.create({
          className: 'danger',
          content: 'No fue posible guardar el pokemon',
          dismissButton: true
        });

        $log.error('Error guardando pokemon', err);
      });
    }


  }

})(angular.module('pokemons.pk-ficha'));
