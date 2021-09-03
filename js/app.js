
angular.module("myApp",["mds","ui.router"])
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
        .state("app",{
            url:"/app",
            views:{
                main:{
                    templateUrl:"templates/main.html",
                    controller:"appCtrl"
                }
            }
        })
        .state("app.home",{
            url:"/home",
            views:{
                sub:{
                    templateUrl:"templates/home.html",
                    controller:"homeCtrl"
                }
            }
        })
        .state("app.store",{
            url:"/store",
            views:{
                sub:{
                templateUrl:"templates/store.html",
                controller:"storeCtrl"
            }}
        })
        .state("app.fourm",{
            url:"/fourm",
            views:{
                sub:{
                    templateUrl:"templates/fourm.html",
                    controller:"fourmCtrl"
                }
            }
        })
        .state("app.contact",{
            url:"/contact",
            views:{
                sub:{
                    templateUrl:"templates/contact.html",
                    controller:"contactCtrl"
                }
            }
        })
        .state("app.register",{
            url:"/register",
            views:{
                sub:{
                    templateUrl:"templates/register.html",
                    controller:"registerCtrl"
                }
            }
        })
        .state("app.login",{
            url:"/login",
            views:{
                sub:{
                    templateUrl:"templates/login.html",
                    controller:"loginCtrl"
                }
            }
        })
        .state("app.dashboard",{
            url:"/dashboard",
            views:{
                sub:{
                    templateUrl:"templates/cPanel.html",
                    controller:"dashboardCtrl"
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
    
    