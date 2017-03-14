/**
 * Created by Administrator on 3/10/2017.
 */

'use strict';

movieApp.controller('HomeController',HomeController);

function HomeController($scope, movieService,upComming){
    $scope.hello = 'Hello Angular';
    $scope.getPlaying = movieService.getAllMovies();
    $scope.upComming = upComming;
}