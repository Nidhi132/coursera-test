(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "";
  $scope.msg = "";
  LunchCheckController.$inject = ['$scope'];
  

  $scope.CalculateItem = function (string) {
    var words = string.split(',');
    console.log(words);
    if(words.length<=3)
      msg = "ENJOY!";
    else
      msg = "Too Much";
  };

});


})();