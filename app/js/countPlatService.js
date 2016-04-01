countPlatApp.factory('CountPlat',function ($resource) {
  
  var numberOfVisitor = 1;

  var employeeList = [];

  this.setNumberOfVistors = function(num) {
    numberOfVisitor = num;
  }

  this.getNumberOfVistors = function() {
    return numberOfVisitor;
  }

  this.createEmployee = function(id, name, numberofInterview) {
    employeeList.push({id: id; name: name; numberofInterview: numberofInterview});
  }


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details





  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});