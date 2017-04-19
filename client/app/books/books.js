angular.module('twoTopApp.books', [])


.controller('booksController', function ($scope, Tables) {
  $scope.hello = 'hello';
  $scope.data = {};
    Tables.getAll()
      .then(function (tables) {
        $scope.data.tables = tables;
        $scope.books = tables.data;
      })
      .catch(function (error) {
        console.error(error);
      });
});
