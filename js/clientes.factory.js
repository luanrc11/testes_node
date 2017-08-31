angular.module("clientes").factory("ClientesFactory", function($q, $http, api){
    return {
        read: function(){
            return $http.get(api);
        },
        
    }
});