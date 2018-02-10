/**
 * Created by mohaike on 2017/6/15.
 */

var app = angular.module('kfl', ['ionic']);
app.service("$kflHttp",["$http","$iobicLoading",function($http,$iobicLoading){
  "use strict";
  this.sendRequest=function(url,handleSuss){
    $http.get(url).success(function(){
      handleSuss();
    })
  }
}])
//配置状态
app.config(
  function ($stateProvider,
            $ionicConfigProvider,
            $urlRouterProvider) {

    //调整tabs固定在底部（无论是在哪个平台）
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
      .state('kflStart',{
        url:'/kflStart',
        templateUrl:'tpl/start.html'
      })
      .state('kflMain',{
        url:'/kflMain',
        templateUrl:'tpl/main.html',
          controller:"MainCtrl"
      })
      .state('kflDetail',{
        url:'/kflDetail',
        templateUrl:'tpl/detail.html'
      })
      .state('kflOrder',{
        url:'/kflOrder',
        templateUrl:'tpl/order.html'
      })
      .state('kflMyOrder',{
        url:'/kflMyOrder',
        templateUrl:'tpl/myOrder.html'
      })

    $urlRouterProvider.otherwise('/kflStart');

  })

//创建一个父控制器
app.controller('parentCtrl',['$scope','$state',
  function ($scope,$state) {

    $scope.jump = function (desState,arg) {
      $state.go(desState,arg);
    }

  }
]);
app.controller('MainCtrl',['$scope','$kflHttp',
  function ($scope,$kflHttp) {
    $kflHttp.sendRequest("data/dish_getbypage.php",function(data){
      "use strict";
      console.log(data);
      $scope.dishList=data;
    })
    $scope.loadMore=function(){
      "use strict";
      $kflHttp.sendRequest("data/dish_getbypage.php?="+$scope.dishList.length,function(data){
        if(data.length<5){
          $scope.hasMore=false;
        }
      })
    }
    $scope.kw=function(){
      "use strict";

    }
  }
]);








