/**
 * Created by Administrator on 3/12/2017.
 */
'use strict';

movieApp.factory('movieService', function ($resource) {
    //var resource = $resource('https://api.themoviedb.org/3/movie/now_playing?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US&page=1', {'query':  {method:'GET', isArray:true}});
    var allMovies = $resource('https://api.themoviedb.org/3/movie/:sortOrder?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US&page=page',{sortOrder:'@sortOrder',page:'@page'});
    var singleMovie = $resource('https://api.themoviedb.org/3/movie/:id?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US', {id:'@eventId'});
    var similar = $resource('https://api.themoviedb.org/3/movie/:order/similar?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US', {order: '@order'});
    var similar2 = $resource('https://api.themoviedb.org/3/movie/:order/:similar?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US&page=page', {order: '@order',similar:'@similar',page:'@page'});
    var recommendations = $resource('https://api.themoviedb.org/3/movie/:order/recommendations?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US', {order: '@order'});
    var getVideos = $resource('https://api.themoviedb.org/3/movie/:order/videos?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US',{order:'@order'});
    var search = $resource('https://api.themoviedb.org/3/search/movie?api_key=0a3c70c3a367d5118f76368cb863d6ca&language=en-US&query=query&page=1&include_adult=true',{query:'@query'});
    return{
        singleMovie: function(eventId){
            return singleMovie.get({id:eventId});
        },
        getAllMovies:function(sortOrder, page){
            return allMovies.get({sortOrder:sortOrder, page:page});

        },
        similarMovies:function(order){
            return similar.get({order:order});
        },
        similarMovies2:function(order, similar, page){
            return similar2.get({order:order, similar:similar, page:page});
        },
        recommended: function(order){
            return recommendations.get({order:order});
        },
        videos:function(order){
            return getVideos.get({order:order})
        },
        search:function(query){
            return search.get({query:query})
        }
    };

});