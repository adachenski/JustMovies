/**
 * Created by Administrator on 3/12/2017.
 */

'use strict';

movieApp.controller('MovieController', function ($scope, $state, $stateParams, movieService, $log) {

    //$scope.sortOrder = {
    //    "value": "now_playing"
    //};

    $scope.names = [
        {
            'id':1,
            'value':'now_playing',
            'display':'Now Playing'
        },
        {
            'id':2,
            'value':'top_rated',
            'display':'Top Rated'
        },
        {
            'id':3,
            'value':'upcoming',
            'display':'Upcoming'
        },
        {
            'id':4,
            'value':'popular',
            'display':'Popular'
        },

    ];

    $scope.singlePage = $stateParams.page;

    $scope.getPlaying = movieService.getAllMovies($stateParams.sortOrder, $stateParams.page);

    //$scope.refresh = function () {
    //    $log.debug($state.current);
    //    $state.reload();
    //};

    $scope.reload = function (value) {
        //console.log($scope.sortOrder.value)
        $stateParams.page = 1;
        $state.go('movieApp.movies', {sortOrder: value, page: $stateParams.page});//{notify: false})
        // $scope.getPlaying = movieService.getAllMovies($stateParams.sortOrder, $stateParams.page);
    };

    $scope.next = function () {
        $scope.singlePage++;
        $state.go('movieApp.movies', {sortOrder: $stateParams.sortOrder, page: $scope.singlePage}, {notify: false});
        $scope.getPlaying = movieService.getAllMovies($stateParams.sortOrder, $scope.singlePage);
    };
    $scope.prev = function () {
        if ($stateParams.page <= 1) {
            $stateParams.page = 1;
        } else {
            $scope.singlePage--;
            $state.go('movieApp.movies', {sortOrder: $stateParams.sortOrder, page: $scope.singlePage}, {notify: false});
            $scope.getPlaying = movieService.getAllMovies($stateParams.sortOrder, $scope.singlePage);
        }
    };

});
