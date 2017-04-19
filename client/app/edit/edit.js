angular.module('twoTopApp.edit', [])

.controller('editController', function ($scope, $http, Tables) {
  $scope.hello = 'hello';
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
          $scope.Name = data[0].Name;
          $scope.Time = data[0].Time;
          $scope.Guest_Count = data[0].Guest_Count;
          $scope.allergies = data[0].allergies;
          $scope.spc_accommodations = data[0].spc_accommodations;
          $scope.TableID = data[0].TableID;
          console.log($scope.TableID, "TABLE IDDDDD")
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
