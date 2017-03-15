/**
* Created by Administrator on 3/12/2017.
*/

'use strict';

movieApp.controller('MovieController',function($scope,$state,$stateParams, movieService){

    $scope.sortOrder = {
        "type": "select",
        "name": "Service",
        "value": "now_playing"
    };

    $scope.reload = function(){
        console.log($scope.sortOrder.value);
        $scope.getPlaying = movieService.getAllMovies($scope.sortOrder.value);
    };

    $scope.getPlaying = movieService.getAllMovies($scope.sortOrder.value);
});
