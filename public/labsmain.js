angular.module('labController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Labs', function($scope, $http,$cookies,Labs) {
		$scope.formData = {};
		$scope.loading = true;

// GET by user =====================================================================
		// when landing on the page, get all labs and show them
		// use the service to get all the labs
		var labuser = 'johmcleo@cisco.com'
		Labs.getbyuser(labuser)
			.success(function(data) {
				$scope.labsbyuser = data;
		        $scope.loading = false;
			});

		// GET =====================================================================
		// when landing on the page, get all labs and show them
		// use the service to get all the labs
		Labs.get()
			.success(function(data) {
				var favoriteCookie = $cookies.get('userid');
				$scope.labs = data;
				$scope.loading = false;	
			});

		// DELETE ==================================================================
		// delete a lab after checking it
		$scope.deleteLab = function(id) {
			$scope.loading = true;

			Labs.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.labs = data; // assign our new list of todos
				});
		};
	}]);

		// RESERVE ==================================================================
		// delete a lab after checking it
		$scope.bookLab = function(id,labuser) {
			$scope.loading = true;

			Labs.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.loading = false;
					$scope.labs = data; // assign our new list of todos
				});
		};
	}]);