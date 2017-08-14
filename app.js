(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {

    $scope.value =0;
    $scope.dishes ="";
    $scope.myMessage= "";

  $scope.calc = function () {
    var total = stringSplit();
    $scope.value = total;
    console.log(total);
    if (total==0)
    {
        $scope.myMessage ="Please enter data first";
    }
    if (total > 3 )
    {
      $scope.myMessage ="Too much!";
    }
    if (total > 0 && total <4)
    {
      $scope.myMessage = "Enjoy!";
    }
  };



  function stringSplit() {
    var x =0;
    console.log($scope.dishes);
    if ($scope.dishes != "")
     {
        var arrayOfStrings = $scope.dishes.split(',');

        x = arrayOfStrings.length;

    }
      return x;
  };
}

})();
