/**
 * Created by bjwsl-001 on 2017/6/9.
 */

var app = angular.module('kfl', ['ng', 'ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/kflStart', {
      templateUrl: 'tpl/start.html'
    })
    .when('/kflMain', {
      templateUrl: 'tpl/main.html'
    })
    .when('/kflDetail', {
      templateUrl: 'tpl/detail.html'
    })
    .when('/kflOrder', {
      templateUrl: 'tpl/order.html'
    })
    .when('/kflMyOrder', {
      templateUrl: 'tpl/myOrder.html'
    })
    .otherwise({redirectTo:'/kflStart'})
})

app.controller('parentCtrl',
  ['$scope','$location',
    function ($scope,$location) {
      $scope.jump = function (desPath) {
        $location.path(desPath);
      }
    }
  ])

