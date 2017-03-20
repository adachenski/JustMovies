/**
 * Created by Administrator on 3/10/2017.
 */

'use strict';

movieApp.controller('HomeController', HomeController);

function HomeController($scope, movieService, tvService) {
    var today =  new Date;
    $scope.hello = 'Hello Angular';

    $scope.sortOrder = {
        "value": "now_playing"
    };
    $scope.order = {
        "value": "popular"
    };
    $scope.today = today;
    $scope.todayDay = today.getDay();
    $scope.week = {
        1:'Monday',
        2:'Tuesday',
        3:'Wednesday',
        4:'Thursday',
        5:'Friday',
        6:'Saturday',
        7:'Sunday'
    }
    $scope.firstId = 1;
    $scope.secondId = 2;
    $scope.thirdId = 3;

    $scope.tv = tvService.getShow($scope.order.value);
    $scope.movie = movieService.getAllMovies($scope.sortOrder.value);
}