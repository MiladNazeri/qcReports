app.factory('ReportsFactory', ['$http', function($http) {
    var urlBase = '/api/reports/'
    var reportsFactory = {};

    delete $http.defaults.headers.common['X-Requested-With'];

    reportsFactory.getAllReports = function () {
      return $http.get(urlBase).then(function(result){
        return result.data;
      });
    };

    reportsFactory.getReportsObj = function () {
      return $http.get(urlBase + 'reportsObj').then(function(result){
        console.log("reports Obj", result.data)
        return result.data;
      });
    };

    reportsFactory.getOneReport = function (id) {
      return $http.get(urlBase + 'report/' + id).then(function(result){
        return result.data;
      });
    };

    //createReview
    reportsFactory.createReport = function (report) {
      return $http.post(urlBase + 'create/', report);
    };

    reportsFactory.getReport = function () {
      return $http.get(urlBase + 'doc/', {headers: {"Accept": "*/*"}});
    };

    //Get a review by ID
    reportsFactory.getReportByID = function (reportID) {
      return $http.get(urlBase + 'report/' + reportID).then(function(result){
        return result.data;
      });
    };

    reportsFactory.getReportByUser = function (userId) {
      return $http.get(urlBase + '/' + userId).then(
        function(result) {
          return result.data;
        });
    };

    return reportsFactory
}]);