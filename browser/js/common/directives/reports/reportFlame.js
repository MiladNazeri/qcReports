app.directive('reportFlame', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-flame.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.flame.jobs[jobNumber] = {};
            $scope.newReport.flame.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-flame-job job-number=" + jobNumber + " job='newReport.flame.jobs["+jobNumber+"].v001'></report-flame-job>")($scope));
            $scope.newReport.flame.job_number="";
            console.log("jobs object", $scope.newReport.flame.jobs)
            }
        }
    };
});

app.directive('reportFlameJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportFlameJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});