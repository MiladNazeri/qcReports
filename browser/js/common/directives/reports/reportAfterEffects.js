app.directive('reportAfterEffects', function ($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-after-effects.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                $scope.newReport.after_effects.splice(Search.indexOfJob(jobNumber, $scope.newReport.after_effects), 1)
                angular.element(document.getElementById(id)).remove()
            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                $scope.newReport.after_effects.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-after-effects-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.after_effects["+Search.indexOfJob(jobNumber, $scope.newReport.after_effects) +"].report[0]' ></report-after-effects-job>")($scope));
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