app.directive('reportAfterEffects', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-after-effects.html',
        link: function($scope, element, attrs, controller){
            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempafter_effects.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()
            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-after-effects-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempafter_effects.jobs["+jobNumber+"]' ></report-after-effects-job>")($scope));
                $scope.newReport.after_effects.job_number="";
                console.log("jobs object", $scope.newReport.after_effects.jobs)
            }
        }
    };
});

app.directive('reportAfterEffectsJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportAfterEffectsJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});