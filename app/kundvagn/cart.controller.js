angular.module("cart")
    .controller("cartController", ["$scope", "$location", "$routeParams", "cartService","loginService",
        function($scope, $location, $routeParams, cartService,loginService){

                $scope.isloggedin=false;
                $scope.cartContain=  cartService.getCartProducts();
                $scope.total = cartService.getTotalCost();
                $scope.$watch(function() {
                    return loginService.getLoginValue()}, 
                    function(newValue, oldValue) {
                    $scope.isloggedin=newValue;
                    });
                $scope.buy = function () {
                    if (!loginService.getLoginValue) {
                        $location.path("/login");
                    } else {
                        var orderProducts = [];
                        var userId = loginService.getUserId();
                        var products = cartService.getCartProducts();

                        for (var i = 0; i < products.length; i++) {
                            orderProducts.push({productId: products[i].productId, quantity: products[i].quantity});
                        }
                        
                        var order = {
                            customerId: userId,
                            products: orderProducts
                        };

                        if (loginService.getLoginValue) {
                            cartService.createOrder(order).then(function (response) {
                                cartService.emptyCart();
                                alert("Tack! Din beställning är genomförd")
                                $location.path("/");
                            })
                            
                        }
                        
                    }
                }
        }]);