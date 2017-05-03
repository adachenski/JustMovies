/**
 * Created by Administrator on 3/13/2017.
 */
'use strict';

movieApp.controller('SingleMovieController',function($state, $scope,$stateParams, movieService,$sce){

    $scope.similar = movieService.similarMovies($stateParams.eventId);

    $scope.recommendations = movieService.recommended($stateParams.eventId);

    movieService.similarMovies2($stateParams.eventId, 'credits', '1')
        .$promise
        .then(function (result) {
            $scope.fullCast = result;
        });

    movieService.singleMovie($stateParams.eventId)
        .$promise
        .then(function(res){
            $scope.singleMovie = res;

            $scope.singleMovieId = res.id;
            var backdrop = res.backdrop_path;
            $scope.imgUrl = $sce.trustAsResourceUrl('https://image.tmdb.org/t/p/original'+backdrop);
        });

    movieService.videos($stateParams.eventId)
        .$promise
        .then(function(res){
        $scope.videos = res.results;
        var urlArr =[];
        for(var r in res.results){
            var x = res.results[r].key;
            urlArr.push($sce.trustAsResourceUrl('https://www.youtube.com/embed/'+x));
        }
        $scope.urls = urlArr;
    });
});