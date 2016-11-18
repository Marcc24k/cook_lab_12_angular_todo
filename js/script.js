
//alert("hello");


var app = angular.module("todoMod", []);

// This is declaring a module. More on this in a moment 
 app.controller('todoController', function($scope){
     $scope.chores = ['Hike the trails', 'Bike the trails', 'Smell the flowers', 'level up', 'Dream', 'Lay around ', 'Walk cats']; 
     $scope.onclick = function(choreToAdd){
         $scope.chores.push(choreToAdd);
         $scope.choreToAdd ="";
     };
         $scope.removeChore = function(chore){
            var index = $scope.chores.indexOf(chore);
             $scope.chores.splice(index, 1);
         }
 });     


//DRAGGABLE
  $( function() {
    $( "#container" ).draggable();
      
    
  } );
