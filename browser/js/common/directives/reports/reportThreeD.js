app.directive('reportThreeD', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-three-d.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.three_d.splice(Search.indexOfJob(jobNumber, $scope.newReport.three_d), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.three_d.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-three-d-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.three_d["+Search.indexOfJob(jobNumber, $scope.newReport.three_d) +"].report[0]' ></report-three-d-job>")($scope));
                $scope.newReport.three_d.job_number="";
            }
        }
    };
});

app.directive('reportThreeDJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportThreeDJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});