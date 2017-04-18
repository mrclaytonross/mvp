angular.module('twoTopApp.form', [])


.controller('formController', function ($scope, Tables) {
  $scope.hello = 'hello';
  $scope.data = {};
    Tables.getAll()
      .then(function (tables) {
        console.log(tables, "PARAM TABLES")
        $scope.data.tables = tables;
      })
      .catch(function (error) {
        console.error(error);
      });
});
