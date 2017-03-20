'use strict';
movieApp.factory('tvService', function ($resource) {
    var getTvShow = $resource('https://api.themoviedb.org/3/tv/:order?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
    var similar = $resource('https://api.themoviedb.org/3/tv/:order/similar?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
    return {
        getShow: function (order) {
            return getTvShow.get({order: order});
        },
        similarTitles: function (order) {
            return similar.get({order: order})
        }
    };
});