app.directive('reportNuke', function($compile, Search) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-nuke.html',
        link: function($scope, element, attrs, controller) {

            $scope.removeJob = function(jobNumber, id) {
                $scope.newReport.nuke_projects.splice(Search.indexOfJob(jobNumber, $scope.newReport.nuke_projects), 1)
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber) {
                $scope.newReport.nuke_projects.push({jobNumber: jobNumber, report: [{version: 1}]})
                angular.element(document.getElementById(id)).append($compile("<report-nuke-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.nuke_projects["+Search.indexOfJob(jobNumber, $scope.newReport.nuke_projects) +"].report[0]' ></report-nuke-job>")($scope));
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
