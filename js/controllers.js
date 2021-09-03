angular.module("myApp")
.controller("appCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $rootScope.stut="active"
    $scope.logout = function(){
        $rootScope.myId=''
        $rootScope.userName=''
        $rootScope.UserComment=''
        $rootScope.userImg=''
        $rootScope.admin=''
        $state.go("app.home")

    }
})
.controller("homeCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    
})
.controller("storeCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $rootScope.R_coun=0;
    $scope.C_btn="Buy";
    $scope.pons = ()=>{
        ++$rootScope.R_coun;
      }
      $scope.pons1 = ()=>{
        --$rootScope.R_coun;
      }  
    $scope.getProduct = function(){
        $http2.post("api/getProduct.php",{
        }).then(function(resp){
            $rootScope.products=resp.data 
            $scope.$apply()
        })
        
    }
    $scope.getProduct()
    $scope.deleteProduct=function(id){
        proc = confirm("Are you sure to delete product ?")
        if(proc)
        {
        $http2.post("api/deleteProduct.php",{
            productId:id
        }).then(function (resp) {
            if(resp.data.status){
                alert("product deleted successfully")
                $scope.getProduct()
            }
            else
                alert("Failed to delete product")
        })
    }}
    
    $rootScope.getCartProduct = function(){
        $http2.post("api/getCartProduct.php",{
        }).then(function(resp){
            $rootScope.cartProducts=resp.data 
            $rootScope.$apply()
        })
        
    }
    $rootScope.getCartProduct()
    $rootScope.deleteCartProduct=function(id){
        proc = confirm("Are you sure to delete product ?")
        if(proc){ 
        $http2.post("api/deleteCartProduct.php",{
            productId:id
        }).then(function (resp) {
            if(resp.data.status){
                alert("product deleted successfully")
                $rootScope.getCartProduct()
                $rootScope.$apply()
            }
            else
                alert("Failed to delete product")
        })
    }}
    $scope.purchases=function(name,price,type,modernity,descr,img,id){
        $http2.post("api/purchases.php",{
            quantity:0,
            name:name,
            price:price,
            type:type,
            modernity:modernity,
            descr:descr,
            img:img,
            id:id
        }).then(function(resp){
            if(resp.data.status){
                alert("product added to cart successfully")
                $rootScope.getCartProduct()
            }
            else
                alert("Failed to added product")
        })
    }

})
.controller("fourmCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $scope.getComment = function(){
        $http2.post("api/getComment.php",{
        }).then(function(resp){
            $rootScope.comment=resp.data 
            $scope.$apply()
        })
        
    }
    $scope.getComment()
    $scope.sendComment=function(userName,UserComment,userImg){
       $http2.post("api/sendComment.php",{
           name:userName,
           img:userImg,
           comment:UserComment
       }).then(function(resp){
        if(resp.data.status){
            alert("Comment sended successfully")
            $scope.userComment =''
            $scope.getComment()
            $scope.$apply()
        }
        else
            alert("Failed to send comment")
       })
    } 
    $scope.deleteComment=function(id){
        proc = confirm("Are you sure to delete product ?")
        if(proc)
        {
        $http2.post("api/deleteComment.php",{
            id:id
        }).then(function (resp) {
            if(resp.data.status){
                alert("Comment deleted successfully")
                $scope.getComment()
                $scope.$apply()
            }
            else
                alert("Failed to delete comment")
        })
    }}
    
})
.controller("dashboardCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $scope.insertProduct=function () {
        $http2.post("api/insertProduct.php",{
            name:$scope.name,
            price:$scope.price,
            type:$scope.type,
            modernity:$scope.modernity,
            descr:$scope.descr,
            img:$scope.x
        }).then(function (resp) {
            if(resp.data.status){
                alert("Product inserted successfully")
                $scope.name=""
                $scope.price=""
                $scope.type=""
                $scope.descr=""
                $scope.y=""
                $scope.x=""
                $state.go("app.store")
                $scope.$apply()
            }
            else
                alert("Failed to insert product")
        })
    }
})
.controller("contactCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    
})
.controller("registerCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $scope.insertUser=function(){
    $http2.post("api/insertUser.php",{
        name:$scope.name,
        pass:$scope.pass,
        email:$scope.email,
        tel:$scope.tel,
        img:$scope.x
    }).then(function(resp){
        alert("Your account created successfully")
        $scope.name=""
        $scope.pass=""
        $scope.email=""
        $scope.tel=""
        $scope.y=""
        $state.go("app.login")
        $scope.$apply()
    })
    }
})
.controller("loginCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $scope.login=function () {
        $http2.post("api/login.php",{
            user:$scope.user,
            pass:$scope.pass
        }).then(function (resp) {
            if(resp.data.status){
                localStorage['myId'] = resp.data.id
                $rootScope.myId=localStorage['myId']
                $scope.getUser($rootScope.myId)
                $scope.getAdmin($rootScope.myId)
                $scope.getUserName($rootScope.myId)
                $state.go("app.home")
                $scope.$apply()
                
            }
            else
                alert("Wrong Username or Password")
        })
        
    }
    $scope.getUser = function (x){
    if(x){$http2.post("api/getUser.php",{
        id:$rootScope.myId
    }).then(function(resp){
        $rootScope.userImg = resp.data.img
        $scope.$apply()
    })}
    }
    $scope.getUser($rootScope.myId)
    $scope.getAdmin = function (x){
        if(x){$http2.post("api/getAdmin.php",{
            id:$rootScope.myId
        }).then(function(resp){
            localStorage['admin'] = resp.data.admin
            $rootScope.admin = localStorage['admin']
            $scope.$apply()
        })}
    }
    $scope.getAdmin($rootScope.myId)
    $scope.getUserName = function (x){
        if(x){$http2.post("api/getUserName.php",{
            id:$rootScope.myId
        }).then(function(resp){
            localStorage['userName'] = resp.data.name
            $rootScope.userName = localStorage['userName']
            $scope.$apply()
        })}
    }
    $scope.getUserName($rootScope.myId)
    
    

    
})

