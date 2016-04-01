countPlatApp.controller('CountPlatCtrl', function ($scope, $firebaseArray, $firebaseObject, CountPlat) {

	// var ref = new Firebase("https://glowing-heat-1407.firebaseio.com");
	var ref = new Firebase("https://countplat.firebaseio.com");

	// ref.child("employeeList").push({"id": 1, "name": "Stacy", "title": "VP", "description": "responsible for business strategy and future business plan"});
	// ref.child("employeeList").push({"id": 2, "name": "Eric", "title": "PR", "description": "responsible for public resourcing and dealing with emergent events"});
	// ref.child("employeeList").push({"id": 3, "name": "Wally", "title": "CFO", "description": "responsible for investment and capital funding"});

	// $scope.data = $firebaseObject(ref);

	// download the data into a local object
	// var syncObject = $firebaseObject(ref);

	var syncArray = $firebaseArray(ref.child("employeeList"));

	// synchronize the object with a three-way data binding
	// click on 'index.html' above to see it used in the DOM
	// syncObject.$bindTo($scope, "data");
	// syncArray.$bindTo($scope, "arraydata");
	$scope.message = $firebaseArray(ref.child("employeeList"));

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
