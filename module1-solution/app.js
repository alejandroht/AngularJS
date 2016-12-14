(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message;
  $scope.textField;

  $scope.showMessage = function () {
    
  	var text = $scope.textField;
  	
  	var arr = text.split(",");

  	if (arrayElements(arr) <= 3) {
  		$scope.message = "Enjoy!";
  	} 

  	if (arrayElements(arr) > 3) {
  		$scope.message = "Too much!";	
  	}

    console.log(arrayElements(arr));

  };


  function arrayElements(array) {

    var cont = 0;

    //Count items that are not null or blank
    array.forEach(function(item){
    	if (item) {
    		cont += 1;
    	}
    });
    return cont;
  };

}

})();
