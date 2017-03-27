/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.factory('movieService', function ($resource) {
    //var resource = $resource('https://api.themoviedb.org/3/movie/now_playing?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US&page=1', {'query':  {method:'GET', isArray:true}});
    var allMovies = $resource('https://api.themoviedb.org/3/movie/:sortOrder?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US&page=page',{sortOrder:'@sortOrder',page:'@page'});
    var singleMovie = $resource('https://api.themoviedb.org/3/movie/:id?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {id:'@eventId'});
    var similar = $resource('https://api.themoviedb.org/3/movie/:order/similar?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
    var recommendations = $resource('https://api.themoviedb.org/3/movie/:order/recommendations?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {order: '@order'});
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
        recommended: function(order){
            return recommendations.get({order:order});
        }
    };

});