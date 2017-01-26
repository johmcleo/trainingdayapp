var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope,$http){
    $http.get('http://www.ciscotrainingday.io/api/labs/').success(function(response){
        $scope.mydata = response;
        console.log($scope.mydata)
    })
});
