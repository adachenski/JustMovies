/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.factory('getNowPlaying', function ($resource) {
    var resource = $resource('https://api.themoviedb.org/3/movie/now_playing?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US&page=1', {'query':  {method:'GET', isArray:true}});

    return{
        getMovie: function(eventId){
            return resource.get({id:eventId});
        },
        getAllMovies:function(){
            return resource.get();

        }
    };

});