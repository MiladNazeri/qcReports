app.directive('reportThreeD', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-three-d.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempthree_d.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-three-d-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempthree_d.jobs["+jobNumber+"].v001' ></report-three-d-job>")($scope));
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
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportThreeDJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});