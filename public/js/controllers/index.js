angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 600,
        editable: true,
        header:{
          left: '',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

    $scope.alertEventOnClick = function(){
      return true;
    };

}]);