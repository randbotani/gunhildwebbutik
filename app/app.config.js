angular.module("app")
    .config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "app/produkt/product-list.template.html",
                    controller: "productListController"
                })
                
                .when('/about', {
                    templateUrl: "app/about.html"
                })
                .when('/contact', {
                    templateUrl: "app/contact.html"
                })

                .when("/product/:productId", {
                    templateUrl: "app/produkt/product-detail.template.html",
                    controller: "productDetailsController"
                })
                .when("/new-user", {
                templateUrl: "app/kund/customer.template.html",
                controller: "customerCreateController"
            })

                .when("/login", {
                    templateUrl: "app/login/login.template.html",
                    controller: "loginController"
                })

                .when("/cart", {
                    templateUrl: "app/kundvagn/cart.template.html",
                    controller: "cartController"
                })

                .otherwise("/");
            $locationProvider.html5Mode(true);
        }]);