app.directive('reportOther', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-other.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.other.splice(Search.indexOfJob(jobNumber, $scope.newReport.other), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.other.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-other-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.other["+Search.indexOfJob(jobNumber, $scope.newReport.other) +"].report[0]' ></report-other-job>")($scope));
                $scope.newReport.other.job_number="";

            }
        }
    };
});

app.directive('reportOtherJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportOtherJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});