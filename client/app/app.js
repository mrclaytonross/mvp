const App = angular.module('twoTopApp', ['twoTopApp.form', 'ngRoute']);

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

// angular.module('shortly', [
//   'shortly.services',
//   'shortly.links',
//   'shortly.shorten',
//   'shortly.auth',
//   'ngRoute'
// ])
// .config(function ($routeProvider, $httpProvider) {
//   $routeProvider
//     .when('/signin', {
//       templateUrl: 'app/auth/signin.html',
//       controller: 'AuthController'
//     })
//     .when('/signup', {
//       templateUrl: 'app/auth/signup.html',
//       controller: 'AuthController'
//     })
//     // Your code here
//
//     .when('/links', {
//       templateUrl: 'app/links/links.html',
//       controller: 'LinksController',
//       authenticate: true
//     })
//     .when('/shorten', {
//       templateUrl: 'app/shorten/shorten.html',
//       controller: 'ShortenController',
//       authenticate: true
//     })
//     .otherwise({
//       redirectTo: '/links'
//     });
//
//     // We add our $httpInterceptor into the array
//     // of interceptors. Think of it like middleware for your ajax calls
//   $httpProvider.interceptors.push('AttachTokens');
// })


// .mainController : function ($scope, $http) {
//   $scope.formData = {};
//   $http.get('/api/reservations')
//   .success(function (data) {
//     $scope.reservations = data;
//     console.log(reservation);
//   })
//   .error(function (error) {
//     console.log(error + ' error')
//   });
// };
//not formatted controler insta
