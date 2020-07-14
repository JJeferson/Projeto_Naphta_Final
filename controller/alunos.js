var alunosModulo = angular.module('alunosModulo',[]);

alunosModulo.controller("alunosController",function($scope){

   $scope.alunos = [
      {CPF:'000001', Nome:'Vagaba', Endereco:'Rua teste  321', Email:'PingolaIluminada@teste.com.br'},
      {CPF:'000002', Nome:'Cu de bunda'      , Endereco:'Rua teste  321', Email:'Pingola3Iluminada@teste.com.br'},
      {CPF:'000003', Nome:'inutil ', Endereco:'Rua teste  321', Email:'Pingola2Iluminada@teste.com.br'},
      {CPF:'000004', Nome:'Inutl2'     , Endereco:'Rua teste  321', Email:'PingolaIluminada4@teste.com.br'},
      {CPF:'000004', Nome:'Inutil3'      , Endereco:'Rua teste  321', Email:'PingolaIluminada5@teste.com.br'},
      {CPF:'000006', Nome:'Inutil4' , Endereco:'Rua teste  321', Email:'PingolaIluminada6@teste.com.br'},
      {CPF:'000007', Nome:'Inutil5', Endereco:'Rua teste  321', Email:'PingolaIluminada7@teste.com.br'},
   ];

});