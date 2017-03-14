/**
* Created by Administrator on 3/12/2017.
*/

'use strict';

movieApp.controller('MovieController',function($scope,movieService){

    $scope.getPlaying = movieService.getAllMovies();
});
