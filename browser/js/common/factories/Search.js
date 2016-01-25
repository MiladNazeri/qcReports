app.factory('Search', function(){
    var search = {};

    search.indexOfJob = function (jobNumber, array){
                return array.map(function(e) {

                    return e.jobNumber; }).indexOf(jobNumber);
            }

    return search;
})