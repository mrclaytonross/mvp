angular.module('twoTopApp.cancel', [])

.controller('cancelController', function ($scope, $http) {
  $scope.formModel = {};
  $scope.data = {};
  $scope.books = [];
  $scope.searchResult;
  $scope.hello = "hello"
  $scope.onSubmit = function (valid) {
    if (valid) {
      console.log('hey we submitted');
      $http({
        url:'/cancel',
        method: "DELETE",
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
});
