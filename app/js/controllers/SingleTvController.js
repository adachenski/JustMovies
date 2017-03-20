
'use strict';

movieApp.controller('SingleTvController',function($scope,$stateParams, tvService){
//console.log($stateParams.eventId);
    $scope.singleTv = tvService.getShow($stateParams.order);
    $scope.similar = tvService.similarTitles($stateParams.order)
    console.log($scope.singleTv);

    console.log('similar');
    console.log($scope.similar)
});