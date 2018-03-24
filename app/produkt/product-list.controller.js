

angular.module("product")
.controller("productListController", ["$scope", "$location", "productService", "categoryService", 

function($scope, $location, productService, categoryService, $filter ) {
	
	productService.getProducts().then(function(response) {
			var products = response.data;

	categoryService.getCategory().then(function(response) {
		var categories = response.data;
			
		angular.forEach(products, function(product) {
				angular.forEach(categories, function(category) {
					if(product.categoryId == category.id) {
						product.categoryName = category.name;
				}
			});
			});
			$scope.products = products;
			$scope.categories = categories;
		});
	});

	$scope.productClicked = function(id) {
		$location.path("/product/" + id);
	}
}]);