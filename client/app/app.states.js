(function (app, undefined){
  'use strict';

  app.config(['$urlRouterProvider', estados]);

  function estados($urlRouterProvider){
    $urlRouterProvider.otherwise('/lista');
  }
})(angular.module('app'));
