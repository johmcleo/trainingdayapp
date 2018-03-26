angular.module('labController', ['ngCookies','angular.filter'])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','$cookies','$filter','Labs', function($scope, $http, $cookies,$filter, Labs) {
		$scope.formData = {};
		$scope.loading = true;
		$scope.usercookie = $cookies.get('userid');

// GET by user =====================================================================
		// when landing on the page, get all labs and show the
		// use the service to get all the labs
		var labuser = $scope.usercookie;
		Labs.getbyuser(labuser)
			.success(function(data) {
				$scope.labsbyuser = data;
				$scope.loading = false;
			});
		// GET =====================================================================
		// when landing on the page, get all labs and show them
		// use the service to get all the labs
//		Labs.get()
//			.success(function(data) {
//				$scope.labs = data;
//				$scope.loading = false;	
//			});


		Labs.getbyarch('Enterprise Networks')
			.success(function(data) {
				$scope.enlabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Datacenter',labuser)
			.success(function(data) {
				$scope.dclabs = data;
				$scope.loading = false;
			});	
		Labs.getbyarch('Collaboration',labuser)
			.success(function(data) {
				$scope.collablabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Security',labuser)
			.success(function(data) {
				$scope.seclabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Devnet',labuser)
			.success(function(data) {
				$scope.devnetlabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Meraki',labuser)
			.success(function(data) {
				$scope.merakilabs = data;
				$scope.loading = false;	
			});	

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createLab = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.labname != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Labs.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.labs = data; // assign our new list of todos
					});
			}
		};

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

// BOOK ==================================================================
		// BOOK a lab after checking it
		$scope.bookLab = function(labuser,labname) {
			$scope.loading = true;
			angular.forEach($scope.labsbyuser,function(value,index){
				if(labname == value.labname){
				 alert('Sorry you have aleady requested that lab');
				 labname = 'null'
				}
			})
			Labs.booklab(labuser,labname)

				// if successful creation, call our get function to get all the new labs
				.success(function(data) {
					$scope.loading = false;
					Labs.getbyuser(labuser)
			            .success(function(data) {
						 $scope.labsbyuser = data;
		Labs.getbyarch('Enterprise Networks')
			.success(function(data) {
				$scope.enlabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Datacenter')
			.success(function(data) {
				$scope.dclabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Collaboration')
			.success(function(data) {
				$scope.collablabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Security')
			.success(function(data) {
				$scope.seclabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Devnet')
			.success(function(data) {
				$scope.devnetlabs = data;
				$scope.loading = false;	
			});	
		Labs.getbyarch('Meraki')
			.success(function(data) {
				$scope.merakilabs = data;
				$scope.loading = false;	
			});	
		                 $scope.loading = false;
			});
				});
		};
	}]);

	