var professoresModulo = angular.module('professoresModulo',[]);

professoresModulo.controller("professoresController",function($scope){

   $scope.professores = [
      {CPF:'000001', Nome:'Tedius Pingolus', Endereco:'Rua teste  321', Email:'PingolaIluminada@teste.com.br'},
      {CPF:'000002', Nome:'Tedius cu'      , Endereco:'Rua teste  321', Email:'Pingola3Iluminada@teste.com.br'},
      {CPF:'000003', Nome:'Tedius Pingolus segundo', Endereco:'Rua teste  321', Email:'Pingola2Iluminada@teste.com.br'},
      {CPF:'000004', Nome:'xalabacanta'     , Endereco:'Rua teste  321', Email:'PingolaIluminada4@teste.com.br'},
      {CPF:'000004', Nome:'xulamalaga'      , Endereco:'Rua teste  321', Email:'PingolaIluminada5@teste.com.br'},
      {CPF:'000006', Nome:'epibataxulimiba' , Endereco:'Rua teste  321', Email:'PingolaIluminada6@teste.com.br'},
      {CPF:'000007', Nome:'ATATATATATATATAT', Endereco:'Rua teste  321', Email:'PingolaIluminada7@teste.com.br'},
   ];

   $scope.selecionaRegistro = function(registroSelecionado){
   	  $scope.registro = registroSelecionado;
   }

});