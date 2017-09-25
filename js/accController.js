audioAppModule.config(function($routeProvider) {
  $routeProvider

  .when('/acc', {
    templateUrl : './view/routes/accordion.html',
    controller  : 'accController'
  })

  .when('/video', {
    templateUrl : './view/routes/backGround.html',
    controller  : 'backController'
  })
  .when('/task', {
    templateUrl : './view/routes/calendar.html',
    controller  : 'MainSchedulerCtrl'
  })
  .when('/photos', {
    templateUrl : './view/routes/photos.html',
    controller  : 'photoCtrl'
  })
   .when('/map', {
    templateUrl : './view/routes/map.html',
    controller  : 'mapCtrl'
  })
   .when('/tune', {
    templateUrl : './view/widgets/audio.tpl.html',
    controller  : 'audioCtrl'
  })
   .when('/book', {
    templateUrl : './view/routes/book-list.html',
    controller  : 'BookListCtrl'
  })

  });




audioAppModule.controller('accController', function($scope) {
  $scope.message = 'Hello from accordion controller';
});

