angular.module("order")
.factory("orderService", ["$http", function($http) {
	var order = [];
	return {
		createOrder: function(order) {
			return $http.post("http://nackbutik.azurewebsites.net/api/order", order);
		}
	};
}])