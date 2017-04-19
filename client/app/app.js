const App = angular.module('twoTopApp', ['twoTopApp.form', 'ngRoute', 'twoTopApp.services', 'twoTopApp.books']);

App.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/form', {
      templateUrl: 'app/form/form.html',
      controller: 'formController'
    })
    .when('/books', {
      templateUrl: 'app/books/books.html',
      controller: 'booksController',
    })
    .otherwise({ redirectTo: '/form' });
});
App.run(function() {
});
