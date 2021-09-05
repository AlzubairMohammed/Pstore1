angular.module("myApp")
.controller("AppCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $rootScope.stut="active"
    $scope.logout = function(){
        $rootScope.userLoggedIn = false
        $state.go("app.home")
    }

    // Handle Users
    $scope.users = [
        {id:0, name:"mutwakil", email:"mutwakil@gmail.com", password:"kola123"},
        {id:1, name:"omer", email:"omer123@gmai.com", password:"omer123"},
        {id:2, name:"khalid", email:"khalid123@gmai.com", password:"khalid123"},
        {id:3, name:"ali", email:"ali123@gmai.com", password:"ali123"}
    ]
})