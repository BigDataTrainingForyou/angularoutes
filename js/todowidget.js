audioAppModule.directive('myTodo', function(){
    return {
      restrict: 'EA',
    /*  template:'<h1>{{title}}</h1>'+
'<div ng-repeat="todo in list">'+
  '<input type="checkbox" ng-model="todo.completed"> {{todo.name}}'+
'</div>',
*/
templateUrl:'./view/widgets/todo.tpl.html',




      scope: {
        list: '=',
        title: '@'
      }
    };
  });
audioAppModule.controller('main', function($scope){
  $scope.todo = [
    {name: 'Create a custom directive', completed: true},
    {name: 'Learn about restrict', completed: true},
    {name: 'Master scopes', completed: false}
  ];


});