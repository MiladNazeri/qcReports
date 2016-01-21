app.directive('reportFlame', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-flame.html',
        link: function($scope, element, attrs, controller){
            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempflame.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-flame-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempflame.jobs["+jobNumber+"]' ></report-flame-job>")($scope));
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