//Dogs service used for Dogs REST endpoint
angular.module('mean.dogs').factory("Dogs", ['$resource', function($resource) {
    return $resource('dogs/:dogId', {
        dogId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);