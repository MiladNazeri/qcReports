app.directive('reportArtwork', function ($compile) {
    return {
        restrict: 'E',
        // scope: {},
        templateUrl: 'partials/_report-artwork.html',
        link: function($scope, element, attrs, controller){
            $scope.removeJob = function(jobNumber, id){
                console.log("jobNumber",jobNumber)
                console.log("id",id)
                delete $scope.newReport.tempartwork_pack_shots.jobs[jobNumber];
                angular.element(document.getElementById(id)).remove()

            }
            $scope.addJob = function(jobNumber, id, type, versionNumber){
                angular.element(document.getElementById(id)).append($compile("<report-artwork-job remove-job='removeJob(jobNumber, id)' job-number=" + jobNumber + " job='newReport.tempartwork_pack_shots.jobs["+jobNumber+"].v001' ></report-artwork-job>")($scope));
                $scope.newReport.artwork_pack_shots.job_number="";

            }

            }
        }
    })

app.directive('reportArtworkJob', function () {
    return {
        restrict: 'E',
        scope: {
            job: '=',
            jobNumber: '@',
            removeJob: '&'
        },
        templateUrl: 'js/common/directives/reports/reportArtworkJob.html',
        link: function(scope, element, attrs, controller){

        }
    };
});