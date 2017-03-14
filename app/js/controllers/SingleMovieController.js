/**
 * Created by Administrator on 3/13/2017.
 */
'use strict';

//movieApp.controller('SingleMovieController', function ($scope, $routeParams,$route, getMovie) {
//    $scope.singleMovie='nASKO';
//    //$scope.singleMovie = getMovie.getMov($routeParams.eventId);
//});


movieApp.controller('SingleMovieController',function($scope,$stateParams, getMovie){
console.log($stateParams.eventId);
    $scope.customer = getMovie.getMov($stateParams.eventId);
    console.log($scope.customer);
});
//SingleMovieController.$inject =['$scope','$routeParams', 'getNowPlaying'];