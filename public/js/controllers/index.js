angular.module('mean.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.alertEventOnClick = function(date,allDay, _, view){
      var title = prompt('Event Title:');
        if (title) {
          $scope.myCalendar.fullCalendar('renderEvent', {
                                                             title: title,
                                                             date: date,
                                                             allDay: allDay
                                                     },
                                                     true // make the event "stick"
                                             );
                                     }
      $scope.myCalendar.fullCalendar( 'unselect' );
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 600,
        editable: true,
        selectable: true,
        selectHelper: true,
        header:{
          left: '',
          center: 'title',
          right: 'today prev,next'
        },
        select: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };

    $scope.eventSources = {};




}]);