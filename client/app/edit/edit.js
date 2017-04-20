angular.module('twoTopApp.edit', [])

.controller('editController', function ($scope, $http, Tables) {
  $scope.hello = 'hello';
  $scope.newModel = {};
  $scope.search = function (valid) {
    if (valid) {
      console.log('hey we submitted');
      $http({
        url:'/reservation',
        method: "GET",
        params: {"guest":$scope.formModel.Name}
      })
        .success(function (data) {
          $scope.newModel.searchResult = data;
          $scope.newModel.name = data[0].Name;
          $scope.newModel.Time = data[0].Time;
          $scope.newModel.Guest_Count = data[0].Guest_Count;
          $scope.newModel.allergies = data[0].allergies;
          $scope.newModel.spc_accommodations = data[0].spc_accommodations;
          $scope.newModel.TableID = data[0].TableID;
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
  $scope.putting = function () {
    console.log($scope.newModel, 'FUNCTION GETTTIN HIT')
    delete $scope.newModel.searchResult;

    $http({
      url: '/update',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: JSON.stringify($scope.newModel),
    });
    console.log('STILL HAVPPEDNING')
  };
});
