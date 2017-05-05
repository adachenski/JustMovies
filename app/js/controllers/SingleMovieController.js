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
          // $scope.videos = res.results;
          //  console.log($scope.videos);
          $scope.info = res.results;
        var urlArr =[];
        for(var r in res.results){
            var key = res.results[r].key;
            //var type = res.results[r].type;
            //var name = res.results[r].name;
            var obj = {};
            //console.log(res.results[r]);
            obj.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/'+key);
            obj.type = res.results[r].type;
            obj.name = res.results[r].name;
            urlArr.push(obj);
            //urlArr.push($sce.trustAsResourceUrl('https://www.youtube.com/embed/'+key));
            //urlArr.push(type);
            //urlArr.push(name);
        }
        $scope.urls = urlArr;
            console.log($scope.urls);
    });
});