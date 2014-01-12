angular.module('mean.dogs').controller('DogsController', ['$scope', '$routeParams', '$location', 'Global', 'Dogs', function ($scope, $routeParams, $location, Global, Dogs) {
    $scope.global = Global;

    $scope.toggleSelection = function($event, dogId) {
        var idx = $scope.dog.blacklist.indexOf(dogId);

        if (idx > -1)
            $scope.dog.blacklist.splice(idx, 1);
        else
            $scope.dog.blacklist.push(dogId);
    }

    $scope.new = function() {
        $scope.dog = new Dogs({blacklist: []});
        $scope.find();
    }

    $scope.create = function() {
        $scope.dog.$save(function(response) {
            console.log("response-" + response._id);
            $location.path("dogs/" + response._id);
        });

        this.name = "";
        this.gravatar = "";
    };

    $scope.edit = function() {
        $scope.findOne();
        $scope.find();
    }

    $scope.findOne = function() {
        Dogs.get({
            dogId: $routeParams.dogId
        }, function(dog) {
            $scope.dog = dog;
        });
    };

    $scope.remove = function(dog) {
        if (dog) {
            dog.$remove();

            for (var i in $scope.dogs) {
                if ($scope.dogs[i] == dog) {
                    $scope.dogs.splice(i, 1);
                }
            }
        }
        else {
            $scope.dog.$remove();
            $location.path('dogs');
        }
    };

    $scope.update = function() {
        var dog = $scope.dog;
        if (!dog.updated) {
            dog.updated = [];
        }
        dog.updated.push(new Date().getTime());

        dog.$update(function() {
            $location.path('dogs/' + dog._id);
        });
    };

    $scope.find = function() {
        Dogs.query(function(dogs) {
            $scope.dogs = dogs;
        });
    };
}]);