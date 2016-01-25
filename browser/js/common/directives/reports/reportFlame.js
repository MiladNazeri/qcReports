app.directive('reportFlame', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-flame.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.flame.splice(Search.indexOfJob(jobNumber, $scope.newReport.flame), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.flame.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-flame-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.flame["+Search.indexOfJob(jobNumber, $scope.newReport.flame) +"].report[0]' ></report-flame-job>")($scope));
                $scope.newReport.flame.job_number="";

            }
        }
    };
});

app.directive('reportFlameJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportFlameJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});