/**
* Created by Administrator on 3/12/2017.
*/

'use strict';

movieApp.controller('NowPlayingController',function($scope, getNowPlaying){

    $scope.getPlaying = getNowPlaying;
});
