angular.module("clientes").factory("ClientesFactory", function($q, $http){
    return {
        listar: function(){
           var promessa = $q.defer();

           $http.get("http://localhost:3000/clientes").then(
               function(result){
                   var clientes = [];
                   angular.forEach(result.data, function(cliente, id){
                       cliente.id = id;
                       clientes.push(cliente);
                   });
                   promessa.resolve(clientes);
               }
           );
           return promessa.promise;
        },

        inserir: function(cliente){
            console.log(cliente);
            
            return $http.post("http://localhost:3000/clientes/", cliente);
            
        }


        
    };
});