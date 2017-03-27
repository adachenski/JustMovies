
'use strict';

movieApp.controller('SingleTvController',function($scope,$stateParams, tvService){

    $scope.singleTv = tvService.getShow($stateParams.order);
    $scope.similar = tvService.similarTitles($stateParams.order);
    $scope.recommendations = tvService.recommendations($stateParams.order);
});