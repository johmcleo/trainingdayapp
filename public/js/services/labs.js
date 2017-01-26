angular.module('labService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Labs', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/labs');
			},
			getuniquelabs : function() {
				return $http.get('/api/uniquelabs');
			},
			getbyuser : function(labuser) {
				return $http.get('/api/labs/user/' + labuser);
			},
			getbyarch : function(labarch,labuser) {
				return $http.get('/api/labs/arch/all/' + labarch + '/' + labuser);
			},
			create : function(labData) {
				return $http.post('/api/labs', labData);
			},
			booklab : function(labuser,labname) {
				return $http.post('/api/booklab', {labuser:labuser,labname:labname});
			},
			delete : function(id) {
				return $http.delete('/api/labs/' + id);
			}
		}
	}]);