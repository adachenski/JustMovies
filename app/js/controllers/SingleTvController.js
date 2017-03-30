
'use strict';

movieApp.controller('SingleTvController',function($scope,$stateParams, tvService,$sce){

    $scope.singleTv = tvService.getShow($stateParams.order);
    $scope.similar = tvService.similarTitles($stateParams.order);

    $scope.recommendations = tvService.recommendations($stateParams.order);


    tvService.videos($stateParams.order).$promise.then(function(res){
        console.log(res);
        $scope.videos = res.results;
        var urlArr =[];
        for(var r in res.results){
            var x = res.results[r].key;
            urlArr.push($sce.trustAsResourceUrl('https://www.youtube.com/embed/'+x));
        }
        $scope.urls = urlArr;

    });

});