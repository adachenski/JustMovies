/**
 * Created by Administrator on 3/10/2017.
 */

'use strict';

movieApp.controller('HomeController', HomeController);

function HomeController($scope, movieService, tvService) {

    $scope.hello = 'Hello Angular';

    $scope.sortOrder = {
        "value": "now_playing"
    };
    $scope.order = {
        "value": "popular"
    };

    $scope.firstId = 1;
    $scope.secondId = 2;
    $scope.thirdId = 3;

    $scope.tv = tvService.getShow($scope.order.value);
    $scope.movie = movieService.getAllMovies($scope.sortOrder.value);
    $scope.popular = movieService.getAllMovies($scope.order.value);
    console.log($scope.popular);
}