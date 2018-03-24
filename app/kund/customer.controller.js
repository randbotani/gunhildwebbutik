angular.module("customer")
    .controller("customerCreateController", ["$scope", "$location", "$routeParams", "customerService",
        function($scope, $location, $routeParams, customerService){

            $scope.customer = {};

            $scope.createCustomer = function() {
                var newCustomer = {

                    firstName: $scope.customer.firstName,
                    lastName: $scope.customer.lastName,
                    email: $scope.customer.email,
                    password: $scope.customer.password,
                    phone: $scope.customer.phone,
                    address: $scope.customer.address,
                    postalCode: $scope.customer.postalCode,
                    city: $scope.customer.city
                };

                customerService.createCustomer(newCustomer).then(function () {
                    alert("En bekräftelse på att det nyss skapade kontot")
                    $location.path("/login");

                });
            }
        }]);