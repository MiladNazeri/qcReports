app.directive('reportProtools', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-proTools.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.proTools.jobs[jobNumber] = {};
            $scope.newReport.proTools.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-protools-job job-number=" + jobNumber + " job='newReport.protools.jobs["+jobNumber+"].v001'></report-protools-job>")($scope));
            $scope.newReport.proTools.job_number="";
            console.log("jobs object", $scope.newReport.protools.jobs)
            }
        }
    };
});

app.directive('reportProtoolsJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportProtoolsJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});