app.directive('reportAfterEffects', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-after-effects.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.after_effects.jobs[jobNumber] = {};
            $scope.newReport.after_effects.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-after-effects-job job-number=" + jobNumber + " job='newReport.after_effects.jobs["+jobNumber+"].v001'></report-after-effects-job>")($scope));
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
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportAfterEffectsJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});