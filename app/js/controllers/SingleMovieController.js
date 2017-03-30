/**
 * Created by Administrator on 3/13/2017.
 */
'use strict';

movieApp.controller('SingleMovieController',function($scope,$stateParams, movieService,$sce){
//console.log($stateParams.eventId);
    $scope.singleMovie = movieService.singleMovie($stateParams.eventId);
    $scope.similar = movieService.similarMovies($stateParams.eventId);
    $scope.recommendations = movieService.recommended($stateParams.eventId);

    movieService.videos($stateParams.eventId)
        .$promise
        .then(function(res){
        console.log(res);
        $scope.videos = res.results;
        var urlArr =[];
        for(var r in res.results){
            var x = res.results[r].key;
            urlArr.push($sce.trustAsResourceUrl('https://www.youtube.com/embed/'+x));
        }
        $scope.urls = urlArr;
        console.log($scope.urls)

    });
});