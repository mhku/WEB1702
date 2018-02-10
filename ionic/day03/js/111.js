 var app=angular.module('mySuperApp', ['ionic']);
 app.controller('PopupCtrl',["$scope", "$ionicPopup",function($scope, $ionicPopup){
     "use strict";
     $scope.showPopup=function(){
         $scope.date={};
         var myPopup=$ionicPopup.show({

         })
     }
 }])
    app.controller('PopupCtrl',function($scope, $ionicPopup) {
        $scope.showPopup = function() {
            $scope.data = {};
            // 自定义弹窗
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.color">',
                title: '添加颜色',
                subTitle: '颜色名称',
                scope: $scope,
                buttons: [
                    { text: '取消' },
                    {
                        text: '<b>保存</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.color) {
                                // 不允许用户关闭，除非输入颜色
                                e.preventDefault();
                            } else {
                                return $scope.data.color;
                            }
                        }
                    },
                ]
            });
        };
    });