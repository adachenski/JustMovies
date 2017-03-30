'use strict';
movieApp.factory('tvService', function ($resource) {
    var getTvShow = $resource('https://api.themoviedb.org/3/tv/:order?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US', {order: '@order'});
    var getTvShows = $resource('https://api.themoviedb.org/3/tv/:order?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US&page=:page', {order: '@order',page:'@page'});
    var similar = $resource('https://api.themoviedb.org/3/tv/:order/similar?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US', {order: '@order'});
    var recommendations = $resource('https://api.themoviedb.org/3/tv/:order/recommendations?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US', {order: '@order'});
    var getVideos = $resource('https://api.themoviedb.org/3/tv/:order/videos?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US',{order:'@order'});
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
        },
        videos:function(order){
            return getVideos.get({order:order})
        }
    };
});