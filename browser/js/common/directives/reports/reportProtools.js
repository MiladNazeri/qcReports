app.directive('reportProtools', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-proTools.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.proTools.splice(Search.indexOfJob(jobNumber, $scope.newReport.proTools), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.proTools.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-protools-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.proTools["+Search.indexOfJob(jobNumber, $scope.newReport.proTools) +"].report[0]' ></report-protools-job>")($scope));
                $scope.newReport.proTools.job_number="";

            }
        }
    };
});

app.directive('reportProtoolsJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportProtoolsJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});