/**
 * Created by Administrator on 3/12/2017.
 */

'use strict';

movieApp.controller('MovieController', function ($scope, $state, $stateParams, movieService) {

    $scope.sortOrder = {
        "type": "select",
        "name": "Service",
        "value": "now_playing"
    };
    $scope.singlePage = $stateParams.page;

    $scope.getPlaying =  movieService.getAllMovies($scope.sortOrder.value);

    $scope.reload = function () {
        $scope.singlePage =1;
        console.log($scope.sortOrder.value);
        $state.go('movieApp.movies', {sortOrder: $scope.sortOrder.value, page: $stateParams.page}, {notify: false})
        $scope.getPlaying = movieService.getAllMovies($scope.sortOrder.value, $stateParams.page);
    };

    $scope.next = function () {
        $scope.singlePage++;
        $state.go('movieApp.movies', {sortOrder: $scope.sortOrder.value, page: $scope.singlePage}, {notify: false});
        $scope.getPlaying = movieService.getAllMovies($scope.sortOrder.value, $scope.singlePage);
        console.log($state.href('movieApp.movies', $state.params, {absolute: true}));
    };
    $scope.prev = function () {
        if($scope.singlePage === 1){
            $scope.singlePage=1;
        }else{
            $scope.singlePage--;
            $state.go('movieApp.movies', {sortOrder: $scope.sortOrder.value, page: $scope.singlePage}, {notify: false});
            $scope.getPlaying = movieService.getAllMovies($scope.sortOrder.value, $scope.singlePage);
        }
    };

});
