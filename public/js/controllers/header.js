angular.module('dogs').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Dogs",
        "link": "dogs"
    }, {
        "title": "Add dog",
        "link": "dogs/create"
    }];

    $scope.isCollapsed = false;
}]);