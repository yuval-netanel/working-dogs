//Setting up route
angular.module('dogs').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/dogs', {
            templateUrl: 'views/dogs/list.html'
        }).
        when('/dogs/create', {
            templateUrl: 'views/dogs/create.html'
        }).
        when('/dogs/:dogId', {
            templateUrl: 'views/dogs/view.html'
        }).
        when('/dogs/:dogId/edit', {
            templateUrl: 'views/dogs/edit.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('dogs').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);