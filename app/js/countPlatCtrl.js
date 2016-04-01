countPlatApp.controller('CountPlatCtrl', function ($scope, CountPlat) {

	$scope.numberOfVistors = CountPlat.getNumberOfVistors();

	$scope.setNumberOfVistors = function(number){
		CountPlat.setNumberOfVistors(number);
	}

	$scope.getNumberOfVistors = function() {
		return CountPlat.getNumberOfVistors();
	}

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
