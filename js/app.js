
angular.module("myApp",["mds","ui.router"])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
        .state("app",{
            url:"/app",
            views:{
                main:{
                    templateUrl:"templates/main.html",
                    controller:"AppCtrl"
                }
            }
        })
        .state("app.home",{
            url:"/home",
            views:{
                sub:{
                    templateUrl:"templates/home.html",
                    controller:"HomeCtrl"
                }
            }
        })
        .state("app.store",{
            url:"/store",
            views:{
                sub:{
                templateUrl:"templates/store.html",
                controller:"StoreCtrl"
            }}
        })
        .state("app.contact",{
            url:"/contact",
            views:{
                sub:{
                    templateUrl:"templates/contact.html",
                    controller:"ContactCtrl"
                }
            }
        })
        .state("app.register",{
            url:"/register",
            views:{
                sub:{
                    templateUrl:"templates/register.html",
                    controller:"RegisterCtrl"
                }
            }
        })
        .state("app.login",{
            url:"/login",
            views:{
                sub:{
                    templateUrl:"templates/login.html",
                    controller:"LoginCtrl"
                }
            }
        })
        .state("app.about",{
            url:"/about",
            views:{
                sub:{
                    templateUrl:"templates/about.html",
                    controller:"AboutCtrl"
                }
            }
        })
        $urlRouterProvider.otherwise("/app/home")
    })
    .filter("priceFilter",function ($rootScope) {
        return function (products,min,max) {
            var out=[]
            if(!min && !max){
                return products
            }
            else if(min && !max){
                products.forEach(function (pro) {
                    if(pro.price>=min)
                        out.push(pro)
                })
            }
            else if(!min && max){
                products.forEach(function (pro) {
                    if(pro.price<max)
                        out.push(pro)
                })
            }
            else{
                products.forEach(function (pro) {
                    if(pro.price>=min && pro.price<max)
                        out.push(pro)
                })
            }
            return out
        }
        
    })
    
    