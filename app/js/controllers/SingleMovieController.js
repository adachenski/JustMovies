/**
 * Created by Administrator on 3/13/2017.
 */
'use strict';

movieApp.controller('SingleMovieController',function($scope,$stateParams, singleMovieService){
//console.log($stateParams.eventId);
    $scope.singleMovie = singleMovieService.getMov($stateParams.eventId);
    console.log($scope.singleMovie);
});