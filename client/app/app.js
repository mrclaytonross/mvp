const App = angular.module('twoTopApp', ['twoTopApp.form', 'ngRoute', 'twoTopApp.services']);

App.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/form', {
      templateUrl: 'app/form/form.html',
      controller: 'formController'
    })
    .otherwise({ redirectTo: '/form' });
});
App.run(function() {
  console.log('ALRIIIIGHTY');
});
