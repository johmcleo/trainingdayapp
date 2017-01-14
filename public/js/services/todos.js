angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/labs');
			},
			create : function(todoData) {
				return $http.post('/api/labs', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/labs/' + id);
			}
		}
	}]);