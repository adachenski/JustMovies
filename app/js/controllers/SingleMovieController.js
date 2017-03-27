/**
 * Created by Administrator on 3/13/2017.
 */
'use strict';

movieApp.controller('SingleMovieController',function($scope,$stateParams, movieService){
//console.log($stateParams.eventId);
    $scope.singleMovie = movieService.singleMovie($stateParams.eventId);
    $scope.similar = movieService.similarMovies($stateParams.eventId);
    $scope.recommendations = movieService.recommended($stateParams.eventId);
});