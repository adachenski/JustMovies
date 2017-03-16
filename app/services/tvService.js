'use strict';
movieApp.factory('tvService', function ($resource) {
    var allTvShows = $resource('https://api.themoviedb.org/3/tv/:order?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order:'@order'});
    return{
        getAllShows: function(order){
            console.log(allTvShows);
            return allTvShows.get({order:order});

        }
    };

});