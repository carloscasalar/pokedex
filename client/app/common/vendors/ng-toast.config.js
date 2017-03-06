(function (app, undefined) {
  'use strict';

  app.config(['ngToastProvider', function (ngToastProvider) {
    ngToastProvider.configure({
      animation: 'slide',
      timeout: 8000,
      dismissButton:true
    });
  }]);
})(angular.module('common'));
