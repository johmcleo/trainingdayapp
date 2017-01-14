var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope,$http){
    $http.get('http://localhost:8080/api/labs/').success(function(response){
        $scope.mydata = response;
        console.log($scope.mydata)
    })
});
