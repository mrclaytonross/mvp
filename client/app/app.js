var App = angular.module('twoTopApp', ['ngRoute']);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/form.html',
      controller: function(){}
    })
    .otherwise({ redirectTo: '/' });
});
App.run(function() {
  console.log('ALRIIIIGHTY');
});
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
