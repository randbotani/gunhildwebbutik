angular.module("login")
    .factory("loginService", ["$http","$location", function($http) {

        var isLoggedIn;
        var user;
        return {
            doLogin: function(username, password) {

                var login = {
                    email: username,
                    password: password
                };
                $http.post("http://nackbutik.azurewebsites.net/api/customer/login", login).then(function(response){
                    user = response.data;
                    if (user.email == username) {
                        isLoggedIn = 1;
                        console.log(isLoggedIn);
                        alert("Du är inloggat nu!")
                        
                    } else isLoggedIn = 0;

                })
                   if (isLoggedIn == 0) {
                         alert("Fel användarnamn eller lösenord!");
                         $location.path("/login");
                         
                          
                    }   ;

            },
            doLogOut : function() {
                isLoggedIn = 0;
                user = null;
                

            },

            getLoginValue: function() {
                return isLoggedIn;
            },
            getUserId: function() {
                return user.customerId;
            }
        };
    }]);