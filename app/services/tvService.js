'use strict';
movieApp.factory('tvService', function ($resource) {
    var getTvShow = $resource('https://api.themoviedb.org/3/tv/:order?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
    var getTvShows = $resource('https://api.themoviedb.org/3/tv/:order?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US&page=:page', {order: '@order',page:'@page'});
    var similar = $resource('https://api.themoviedb.org/3/tv/:order/similar?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
    var recommendations = $resource('https://api.themoviedb.org/3/tv/:order/recommendations?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
    return {
        getShow: function (order) {
            return getTvShow.get({order: order});
        },
        getShows: function (order,page) {
            return getTvShows.get({order: order,page:page});
        },
        similarTitles: function (order) {
            return similar.get({order: order})
        },
        recommendations:function(order){
            return recommendations.get({order:order});
        }
    };
});