app.config(function ($stateProvider) {

    $stateProvider.state('new', {
        url: '/new',
        templateUrl: 'js/newReport/newReport.html',
        controller: 'NewReportCtrl'
    });
});

app.controller('NewReportCtrl', function ($scope, $state, ReportsFactory) {
    $scope.newReport = {};
    $scope.addReport = function(){
        ReportsFactory.getReport()
    }


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