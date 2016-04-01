countPlatApp.controller('CountPlatCtrl', function ($scope, $firebaseObject, CountPlat) {

	var ref = new Firebase("https://glowing-heat-1407.firebaseio.com");

	// $scope.data = $firebaseObject(ref);

	// download the data into a local object
	var syncObject = $firebaseObject(ref);

	// synchronize the object with a three-way data binding
	// click on 'index.html' above to see it used in the DOM
	syncObject.$bindTo($scope, "data");

	$scope.numberOfVisitors = CountPlat.getNumberOfVistors();

	$scope.setNumberOfVistors = function(number){
		CountPlat.setNumberOfVistors(number);
	}

	$scope.getNumberOfVistors = function() {
		return CountPlat.getNumberOfVistors();
	}

	$scope.getEmployeeList = function(){
		return CountPlat.getEmployeeList();
	}

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
