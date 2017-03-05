(function (app, undefined){
  'use strict';

  app.config(['$urlRouterProvider', estados]);

  function estados($urlRouterProvider){
    $urlRouterProvider.otherwise('/pokemons');
  }
})(angular.module('app'));
