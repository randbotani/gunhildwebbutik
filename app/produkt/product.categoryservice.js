angular.module("product")
    .factory ("categoryService", ["$http", function ($http) {

        return {
            getCategory: function () {
                return $http.get("http://nackbutik.azurewebsites.net/api/category");
            }
        };
    }]);