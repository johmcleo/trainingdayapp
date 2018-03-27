var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope,$http,$interval){
    $scope.reload = function () {
        $http.get('http://www.ciscotrainingday.io/api/labs').
            success(function (data) {
                $scope.mydata = data;
            });
    };
    $scope.reload();
    $interval($scope.reload, 5000);
});
