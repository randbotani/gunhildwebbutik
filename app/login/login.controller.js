angular.module("login").
controller("loginController", ["$scope", "loginService","$location" ,function ($scope, loginService,$location) {
    $scope.doLogin = function (username, password){
        loginService.doLogin(username,password);
        /* $location.path("/"); */
        $location.path(window.history.back());
    };
    
}]);
