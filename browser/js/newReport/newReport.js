app.config(function ($stateProvider) {

    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'js/newReport/newReport.html',
        controller: 'NewReportCtrl'
    });
});

app.controller('NewReportCtrl', function ($scope, $state, ReportsFactory, COUNTRIES) {
    console.log(COUNTRIES)
    $scope.countries = COUNTRIES.COUNTRIES;
    $scope.newReport = {};
    $scope.addReport = function(){
        ReportsFactory.getReport()
    }

    // $scope.newReport.audio_files.full_mix.included = false;
    $scope.$watch('newReport.audio_files.full_mix.included', function() {

       });



        // .then(function(){
        //     $state.go('home');
        // })


})

// ReportsFactory.createReport($scope.newReport)
//         .then(function(){
//             ReportsFactory.getReport()
//         })
//         .then(function(data){
//             console.log(data);
//         })