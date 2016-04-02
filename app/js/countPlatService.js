countPlatApp.factory('CountPlat',function ($resource) {
  
  var numberOfVisitor = 2;

  // var employeeList = [];
  var employeeList = [{
    "id": 1,
    "name": "Xin",
    "numberofInterview": 3
  },
  {
    "id": 2,
    "name": "Big Xin",
    "numberofInterview": 4
  }];

  this.setNumberOfVisitors = function(num) {
    numberOfVisitor = num;
  }

  this.getNumberOfVisitors = function() {
    return numberOfVisitor;
  }

  this.addOneVisitor = function(){
    numberOfVisitor += 1;
  }

  this.removeOneVisitor = function(){
    numberOfVisitor -= 1;
  }

  this.createEmployee = function(id, name, numberofInterview) {
    employeeList.push({"id": id, "name": name, "numberofInterview": numberofInterview});
  }

  this.getEmployeeList = function(){
    return employeeList;
  }
  // console.log(this.getEmployeeList());


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});