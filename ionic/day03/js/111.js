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
            // �Զ��嵯��
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.color">',
                title: '�����ɫ',
                subTitle: '��ɫ����',
                scope: $scope,
                buttons: [
                    { text: 'ȡ��' },
                    {
                        text: '<b>����</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.color) {
                                // �������û��رգ�����������ɫ
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