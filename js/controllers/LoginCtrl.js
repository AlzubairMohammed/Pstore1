angular.module("myApp")
.controller("LoginCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $scope.login=function () {
        $rootScope.userLoggedIn = true
    }

})