app.directive('reportNuke', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-nuke.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.nuke_projects.jobs[jobNumber] = {};
            $scope.newReport.nuke_projects.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-nuke-job job-number=" + jobNumber + " job='newReport.nuke_projects.jobs["+jobNumber+"].v001'></report-nuke-job>")($scope));
            $scope.newReport.nuke_projects.job_number="";
            console.log("jobs object", $scope.newReport.nuke_projects.jobs)
            }
        }
    };
});

app.directive('reportNukeJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportNukeJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});