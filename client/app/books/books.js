angular.module('twoTopApp.books', [])


.controller('booksController', function ($scope, $http, Tables) {
  $scope.formModel = {};
  $scope.data = {};
  $scope.books = [];
  $scope.searchResult;
  $scope.hello = "hello"
  $scope.onSubmit = function (valid) {
    if (valid) {
      console.log('hey we submitted');
      $http({
        url:'/reservation',
        method: "GET",
        params: {"guest":$scope.formModel.Name}
      })
        .success(function (data) {
          $scope.searchResult = data;
          console.log($scope.searchResult, "HEY THIS HAPPENED");
          console.log('great success data form input')
        }).error(function (data) {
          console.log('ERROR ENTERING DATA');
        });
    } else {
      console.log('invalid form');
    }
  };

  Tables.getAll()
    .then(function (tables) {
      $scope.data.tables = tables;
      $scope.books = tables.data;
    })
    .catch(function (error) {
      console.error(error);
    });
});
