angular.module("customer")
        .factory("customerService", ["$http", function($http) {
            return {
                createCustomer: function (customer) {
                    return $http.post('http://nackbutik.azurewebsites.net/api/customer/', customer);
                },
                getcustomers: function () {
                    return $http.get("http://nackbutik.azurewebsites.net/api/customer");
                },

                getcustomerById: function (customerId) {
                    return $http.get("http://nackbutik.azurewebsites.net/api/customer/" + customerId);
                }
            };
        }]);
