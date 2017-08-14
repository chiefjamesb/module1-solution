(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

    $scope.value =0;
    $scope.food ="";
    $scope.myMessage= "";

  $scope.calc = function () {
    var total = stringSplit($scope.food);
    $scope.value = total;
    if (total > 3 )
    {
      $scope.myMessage ="Too much!";
    }
    else
    {
      $scope.myMessage = "Enjoy!";
    }
  };



  function stringSplit() {
    var arrayOfStrings = $scope.dishes.split(',');

    var x = arrayOfStrings.length;
      return x;
  };
}

})();
