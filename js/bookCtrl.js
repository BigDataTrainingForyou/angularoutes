audioAppModule.factory('BookService', function ($resource) {
    return $resource('https://www.googleapis.com/books/v1/volumes',
        {maxResults: '10', callback: 'JSON_CALLBACK', key: 'AIzaSyATldFLGtPPZVLecasP0nFXkX6RqXa7VEI'},
        { get: { method: 'JSONP' }
        });
});

audioAppModule.filter('formatFilter', function () {
    return function (text) {
        if (text !== null) {
            for (var i in text) {var authors = text[i]}    
            return authors;
        }   
    };
});


audioAppModule.filter('dateFilter', function () {
    return function (text) {
        if (text !== null) {
            var d = new Date(text);
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var year = d.getFullYear();
            return (month +"/"+ day +"/"+ year);
        }   
    };
});
audioAppModule.controller('BookListCtrl', function ($scope, BookService) {
    $scope.searchTerm = "angular";

    $scope.doSearch = function () {
        BookService.get({ q: $scope.searchTerm }, function (response) {

            $scope.bookResults = response.items;
            $scope.orderProp = 'volumeInfo.title';
             // $scope.quantity = 5;
        });
    }
});
