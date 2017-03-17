
'use strict';

movieApp.controller('SingleTvController',function($scope,$stateParams, tvService){
//console.log($stateParams.eventId);
    $scope.singleTv = tvService.getShow($stateParams.order);
    console.log($scope.singleTv);
});