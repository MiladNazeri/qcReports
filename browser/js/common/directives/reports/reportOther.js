app.directive('reportOther', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-other.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            console.log("jobNumber:", jobNumber)
            $scope.newReport.other.jobs[jobNumber] = {};
            $scope.newReport.other.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-other-job job-number=" + jobNumber + " job='newReport.other.jobs["+jobNumber+"].v001'></report-other-job>")($scope));
            $scope.newReport.other.job_number="";
            console.log("jobs object", $scope.newReport.other.jobs)
            }
        }
    };
});

app.directive('reportOtherJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportOtherJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});