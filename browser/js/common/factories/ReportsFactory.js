app.factory('ReportsFactory', ['$http', function($http) {
    var urlBase = '/api/reports/'
    var reportsFactory = {};

    reportsFactory.getAllReports = function () {
      return $http.get(urlBase).then(function(result){
        return result.data;
      });
    };

    //createReview
    reportsFactory.createReport = function (report) {
      return $http.post(urlBase + 'create/', report);
    };

    //Get a review by product ID
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