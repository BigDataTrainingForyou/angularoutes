audioAppModule.directive('displayText', function(){
    return {
      restrict: 'EA',
    /*  template:'<h1>{{title}}</h1>'+
'<div ng-repeat="todo in list">'+
  '<input type="checkbox" ng-model="todo.completed"> {{todo.name}}'+
'</div>',
*/
templateUrl:'./view/widgets/displaytxt.tpl.html',




      scope: {
        list: '=',
        title: '@'
      }
    };
  });

audioAppModule.controller("indexCtrl", function ($scope, $http) {
        
$http.get("./data/data.txt")

       .then(function(response){ $scope.status = response.data; });

});