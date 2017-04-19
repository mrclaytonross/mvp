angular.module('twoTopApp.services', [])

.factory('Tables', function ($http) {
  const getAll = function () {
    return $http({
      method: 'GET',
      url: `/api/reservations`,
    });
  };
  const addOne = function (table) {
    return $http({
      method: 'POST',
      url: `/api/reservations`,
      data: table,
    });
  };

  return {
    getAll: getAll,
    addOne: addOne,
  };
});
