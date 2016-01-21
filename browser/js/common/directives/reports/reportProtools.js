app.directive('reportProtools', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-proTools.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempproTools.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-protools-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempproTools.jobs["+jobNumber+"]' ></report-protools-job>")($scope));
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