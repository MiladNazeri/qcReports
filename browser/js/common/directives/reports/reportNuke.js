app.directive('reportNuke', function($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-nuke.html',
        link: function($scope, element, attrs, controller) {
            $scope.removeJob = function(jobNumber, id) {
                console.log("jobNumber", jobNumber)
                console.log("id", id)
                delete $scope.newReport.tempnuke_projects.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber) {

                angular.element(document.getElementById(id)).append($compile("<report-nuke-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempnuke_projects.jobs[" + jobNumber + "].v001' ></report-nuke-job>")($scope));
                $scope.newReport.nuke_projects.job_number = "";

            }
        }
    };
});

app.directive('reportNukeJob', function() {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportNukeJob.html',
        link: function(scope, element, attrs, controller) {

        }
    };
});
