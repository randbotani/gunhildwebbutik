angular.module("cart")
    .factory("cartService", ["$http", "$location", function($http, $location) {
        var cartProducts = [];
        return {

           createOrder   :   function (orderContain) {
                return $http.post("http://nackbutik.azurewebsites.net/api/order/", orderContain);
            },

            addToCart : function (cartProduct) {

                 var found = false;

                            for (var i = 0; i < cartProducts.length; i++) {
                                if (cartProduct.id === cartProducts[i].id) {
                                    cartProducts[i].quantity++;
                                    found = true;
                                    
                                    break;
                                }
                            }
                            if (!found) {
                                /* cartProducts.push({ productName: cartProduct.productName, 
                                                    id: cartProduct.id, 
                                                    productImage: cartProduct.productImage, 
                                                    quantity: cartProduct.quantity, 
                                                    productPris: cartProduct.productPris }); */

                                                    cartProducts.push(cartProduct);
                                console.log(cartProducts);
                            }  
            },
            getCartProducts : function () {
               return cartProducts;

            },
            emptyCart : function(){
                cartProducts = [];
            },
            getTotalCost: function(){
                var total = 0;
                angular.forEach(cartProducts,function(item){
                    total += item.productPris * item.quantity;
                })
                return total; 
            }
        };
    }]);