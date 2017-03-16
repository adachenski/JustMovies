
'use strict';

movieApp.controller('SingleTvController',function($scope,$stateParams, movieService){
//console.log($stateParams.eventId);
    $scope.singleTv = movieService.singleMovie($stateParams.eventId);
    console.log($scope.singleTv);
});