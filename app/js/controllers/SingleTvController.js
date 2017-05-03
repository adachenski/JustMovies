
'use strict';

movieApp.controller('SingleTvController',function($scope,$stateParams, tvService,$sce){

    //$scope.singleTv = tvService.getShow($stateParams.order);
    $scope.similar = tvService.similarTitles($stateParams.order);

    $scope.recommendations = tvService.recommendations($stateParams.order);

    tvService.getShow($stateParams.order)
        .$promise
        .then(function(res){
            $scope.singleTv = res;
            var backdrop = res.backdrop_path;
            $scope.imgUrl = $sce.trustAsResourceUrl('https://image.tmdb.org/t/p/original'+backdrop);

        });

    tvService.videos($stateParams.order).$promise.then(function(res){
        $scope.videos = res.results;
        var urlArr =[];
        for(var r in res.results){
            var x = res.results[r].key;
            urlArr.push($sce.trustAsResourceUrl('https://www.youtube.com/embed/'+x));
        }
        $scope.urls = urlArr;

    });

});