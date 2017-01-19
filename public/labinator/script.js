var myApp = angular.module("myModule",[]);

myApp.controller("myController",function($scope,$http){
    $http.get('http://ec2-54-90-189-154.compute-1.amazonaws.com/api/labs/').success(function(response){
        $scope.mydata = response;
        console.log($scope.mydata)
    })
});
