app.directive('reportThreeD', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-three-d.html',
        link: function($scope, element, attrs, controller){
            $scope.addJob = function(jobNumber, id, type, versionNumber){
            $scope.newReport.three_d.jobs[jobNumber] = {};
            $scope.newReport.three_d.jobs[jobNumber][versionNumber] = {};
            angular.element(document.getElementById(id)).append($compile("<report-three-d-job job-number=" + jobNumber + " job='newReport.three_d.jobs["+jobNumber+"].v001'></report-three-d-job>")($scope));
            $scope.newReport.three_d.job_number="";
            }
        }
    };
});

app.directive('reportThreeDJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@'
        },
        templateUrl: 'js/common/directives/reports/reportThreeDJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});