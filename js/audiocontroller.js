audioAppModule.directive('playAudio', function(){
    return {
      restrict: 'EA',
    /*  template:'<h1>{{title}}</h1>'+
'<div ng-repeat="todo in list">'+
  '<input type="checkbox" ng-model="todo.completed"> {{todo.name}}'+
'</div>',
*/
templateUrl:'./view/widgets/audio.tpl.html',




      scope: {
        list: '=',
        title: '@'
      }
    };
  });

//The below code will read the data from audio.json file and will pass to the $scope.audios variable 
audioAppModule.controller("audioCtrl", function($scope, $http){    
      $http.get('./data/audio.json') //reading the audio.json file
      
        .success (function(data){
            $scope.audios = data; // binding the data to the $scope.audios variable
          })
        .error(function(data, status) {
              console.error('failure loading the audio file record', status, data);
              $scope.audios = { }; //return blank record if something goes wrong
        });       
});//end controller