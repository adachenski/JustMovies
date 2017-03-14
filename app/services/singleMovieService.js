/**
 * Created by Administrator on 3/13/2017.
 */
/**
 * Created by Administrator on 3/12/2017.
 */

movieApp.factory('singleMovieService', function ($resource) {
    var resource = $resource('https://api.themoviedb.org/3/movie/:id?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US', {id:'@eventId'});
    return{
        getMov: function(eventId){
            console.log(resource);
            return resource.get({id:eventId});
            //return $http({method:'GET',url:function(id){
            //    return 'https://api.themoviedb.org/3/movie/:'+id+'?api_key=cc4b67c52acb514bdf4931f7cedfd12b&language=en-US';
            //}
        }
    };

});