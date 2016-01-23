app.directive('reportVideo', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-video.html',
        link: function($scope, element, attrs, controller){

            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempvideo_files.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-video-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempvideo_files.jobs["+jobNumber+"]' ></report-video-job>")($scope));
                $scope.newReport.video_files.job_number="";
            }

        }
    };
});

app.directive('reportVideoJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportVideoJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});











































































































