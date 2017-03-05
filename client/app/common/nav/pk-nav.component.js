(function (app, undefined){
  'use strict';
  app.component('pkNav', {
    bindings: {
      tituloApp: '@'
    },
    templateUrl: 'app/common/nav/pk-nav.component.html'
  });
})(angular.module('pk-nav'));
