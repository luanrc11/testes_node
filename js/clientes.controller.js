angular.module("clientes").controller("clientesCtrl", 
    function($scope){

        $scope.listaClientes = [
            {
                id: "1234",
                nome: "Luan",
                idade: "22",
                email: "luan@live.com",
                img: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-1/p160x160/15032085_995711957201060_7270760324422768928_n.jpg?oh=799cb8c4338f6dd3e1c0410fafd08ba5&oe=5A29DBE5"
            },
            {
                id: "1324",
                nome: "Lucas",
                idade: "22",
                email: "lucas@live.com",
                img: "https://scontent.fcgh2-1.fna.fbcdn.net/v/t1.0-1/p160x160/17904310_1479790548697713_1667301781728304068_n.jpg?oh=3065df288486ab52a281da9cdbd07f39&oe=5A26167E"
            },
            
        ];

        $scope.novoCliente = {};

        $scope.adicionarCliente = function(){
            var cliente = angular.copy($scope.novoCliente);
            cliente.id = Date.now();
            $scope.listaClientes.push(cliente);

            $scope.novoCliente = {};
        }

        $scope.removerCliente = function(id){
            angular.forEach($scope.listaClientes, function(cliente, i){
                if(cliente.id == id){
                    $scope.listaClientes.splice(i, 1);
                }
            })
        }
        
    })