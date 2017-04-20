const App = angular.module('twoTopApp', ['twoTopApp.form', 'ngRoute', 'twoTopApp.services', 'twoTopApp.books', 'twoTopApp.cancel', 'twoTopApp.edit']);

App.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/update', {
      templateUrl: 'app/form/form.html',
      controller: 'formController',
    })
    .when('/form', {
      templateUrl: 'app/form/form.html',
      controller: 'formController',
    })
    .when('/books', {
      templateUrl: 'app/books/books.html',
      controller: 'booksController',
    })
    .when('/cancel', {
      templateUrl: 'app/cancel/cancel.html',
      controller: 'cancelController',
    })
    .when('/edit', {
      templateUrl: 'app/edit/edit.html',
      controller: 'editController',
    })
    .otherwise({ redirectTo: '/form' });
});
