angular.module("myApp")
.controller("StoreCtrl",function($scope,$rootScope,$http2,$state,$timeout,$interval){
    $rootScope.products = [
        {id:0,name:"Product One",price:72,category:"clothes",image:"img/products/cloth2.jpg",tag:"New"},
        {id:1,name:"Product Two",price:96,category:"clothes",image:"img/products/cloth5.png",tag:"Best Sellers"},
        {id:2,name:"Product Three",price:110,category:"clothes",image:"img/products/cloth7.jpg",tag:"Best Sellers"},
        {id:3,name:"Product Four",price:1100,category:"electronics",image:"img/products/lap2.jpg",tag:"New"},
        {id:4,name:"Product Five",price:1500,category:"electronics",image:"img/products/lap4.jpg",tag:"On Sale"},
        {id:5,name:"Product Six",price:110,category:"clothes",image:"img/products/cloth8.jpg",tag:"New"},
        {id:6,name:"Product Seven",price:120,category:"shoes",image:"img/products/shoes1.jpg",tag:"Best Sellers"},
        {id:7,name:"Product Eight",price:1250,category:"electronics",image:"img/products/lap3.jpg",tag:"New"},
        {id:8,name:"Product Nine",price:118,category:"shoes",image:"img/products/shoes2.jpg",tag:"On Sale"},
        {id:9,name:"Product Ten",price:80,category:"clothes",image:"img/products/cloth3.jpg",tag:"On Sale"},
        {id:10,name:"Product Eleven",price:110,category:"clothes",image:"img/products/cloth6.jpg",tag:"On Sale"},
        {id:11,name:"Product Twelve",price:78,category:"clothes",image:"img/products/cloth1.jpg",tag:"New"},
        {id:12,name:"Product Thirteen",price:130,category:"shoes",image:"img/products/shoes3.jpg",tag:"On Sale"},
        {id:13,name:"Product Fourteen",price:700,category:"electronics",image:"img/products/mobile2.jpg",tag:"On Sale"},
        {id:14,name:"Product Fifteen",price:100,category:"shoes",image:"img/products/shoes4.jpg",tag:"Best Sellers"}
    ]
    
    

})