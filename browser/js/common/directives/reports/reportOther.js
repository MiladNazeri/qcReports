app.directive('reportOther', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-other.html',
        link: function($scope, element, attrs, controller){
            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempother.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-other-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempother.jobs["+jobNumber+"].v001' ></report-other-job>")($scope));
                $scope.newReport.other.job_number="";

            }
        }
    };
});

app.directive('reportOtherJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportOtherJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});