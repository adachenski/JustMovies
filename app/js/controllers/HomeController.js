/**
 * Created by Administrator on 3/10/2017.
 */

'use strict';

movieApp.controller('HomeController',HomeController);

function HomeController($scope, movieService,tvService){
    $scope.hello = 'Hello Angular';
    $scope.sortOrder = {
        "type": "select",
        "name": "Service",
        "value": "now_playing"
    };
    $scope.order = {
        "type": "select",
        "name": "Service",
        "value": "popular"
    };
    $scope.tv = tvService.getAllShows($scope.order.value);
    $scope.movie = movieService.getAllMovies($scope.sortOrder.value);
}