angular.module("clientes").controller("clientesCtrl", 
    function($scope, ClientesFactory){

        $scope.listaClientes = [];

        var carregarClientes = function(){
            ClientesFactory.listar().then(function(clientes){
                $scope.listaClientes = clientes;
            });
        }

        ClientesFactory.listar().then(function(clientes){
            $scope.listaClientes = clientes;
        })  

        $scope.novoCliente = {};

        $scope.adicionarCliente = function(){
            var cliente = {
                id: Date.now() + "",
                nome: $scope.novoCliente.nome,
                cpf: $scope.novoCliente.cpf,
                email: $scope.novoCliente.email,
                img: $scope.novoCliente.img
            };

            //console.log(cliente);

            ClientesFactory.inserir(cliente).then(carregarClientes);
        }       

        $scope.removerCliente = function(id){
            angular.forEach($scope.listaClientes, function(cliente, i){
                if(cliente.id == id){
                    $scope.listaClientes.splice(i, 1);
                }
            })
        }

        carregarClientes();
        
    })