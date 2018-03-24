angular.module("product").controller("productDetailsController",
    ["$scope", "$routeParams","$location", "productService", "categoryService","loginService","cartService",
    function ($scope, $routeParams,$location,productService, categoryService, loginService,cartService) {
        $scope.product = productService.getProductById($routeParams.productId).then(function (response) {

            $scope.product = response.data;
            productService.getProducts().then(function (response) {
                var products = response.data;

                categoryService.getCategory().then(function (response) {
                    var categories = response.data;

                    angular.forEach(products, function (product) {
                        angular.forEach(categories, function (category) {
                            if (product.categoryId == category.id) {
                                product.categoryName = category.name;
                            }
                        });
                    });
                    $scope.products = products;
                    $scope.categories = categories;
                });
            });

            $scope.addToCart = function (product) {
                var antal = 1;
                
                var cartProduct = {
                    productId: product.id,
                    quantity : 1,
                    productImage: product.imageUrl,
                    productName: product.name,
                    productPris : product.price
                };

                cartService.addToCart(cartProduct);
                $location.path("/cart");

                };

        }, function (errorResponse) {
        });
    }]);