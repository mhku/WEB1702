/**
 * Created by bjwsl-001 on 2017/7/10.
 */

var app = angular.module('kfl', ['ionic']);

app.config(
  function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {

    //将tabs固定在页面底部(默认在Android是在顶部)
    $ionicConfigProvider.tabs.position('bottom');

    $stateProvider
      .state('start', {
        url: '/kflStart',
        templateUrl: 'tpl/start.html'
      })
      .state('main', {
        url: '/kflMain',
        templateUrl: 'tpl/main.html',
        controller: 'mainCtrl'
      })
      .state('detail', {
        url: '/kflDetail/:did',
        templateUrl: 'tpl/detail.html',
        controller:'detailCtrl'
      })
      .state('order', {
        url: '/kflOrder/:did',
        templateUrl: 'tpl/order.html',
        controller:'orderCtrl'
      })
      .state('myOrder', {
        url: '/kflMyOrder',
        templateUrl: 'tpl/myOrder.html',
        controller:'myOrderCtrl'
      })

    $urlRouterProvider.otherwise('/kflStart');

  })

//需求：希望每次发网络请求时，
// 都能够有个加载中的遮盖层,如果不封装该服务就得每次去调用$ionicLoading所提供的show/hide方法，太麻烦了
app.service('$kflHttp',
  ['$ionicLoading','$http',function ($ionicLoading,$http) {
    this.sendRequest = function (url,func) {
      $ionicLoading.show({
        template:'加载中..'
      })

      $http.get(url).success(function (data) {
        func(data);
        $ionicLoading.hide();
      })

    }

}]);


app.controller('myCtrl', ['$scope', '$state', function ($scope, $state) {

  $scope.jump = function (desState, args) {
    $state.go(desState, args);
  }

}])

app.controller('mainCtrl', ['$scope','$kflHttp',
  function ($scope, $kflHttp) {
    $scope.dishList = [];
    $scope.hasMore = true;
    // $scope.kw = '';
    $scope.inputTxt = {kw: ''};

    //请求服务器端拿数据
  /*  $http
      .get('data/dish_getbypage.php')
      .success(function (data) {
        console.log(data);
        $scope.dishList = data;
      })*/
      $kflHttp.sendRequest(
        'data/dish_getbypage.php',
        function (data) {
          $scope.dishList = data;
        }
      )

    //处理加载更多
    $scope.loadMore = function () {


      /*$http.get('data/dish_getbypage.php?start=' + $scope.dishList.length)
        .success(function (data) {

          if (data.length < 5) {
            $scope.hasMore = false;
          }
          $scope.dishList = $scope.dishList.concat(data);
        })*/
      $kflHttp.sendRequest(
        'data/dish_getbypage.php?start=' + $scope.dishList.length,
        function(data) {
          if (data.length < 5) {
            $scope.hasMore = false;
          }
          $scope.dishList = $scope.dishList.concat(data);
          $scope.$broadcast('scroll.infiniteScrollComplete')
        }
      )
    }

    //处理搜索
    $scope.$watch('inputTxt.kw', function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue.length > 0) {
       /* $http
          .get('data/dish_getbykw.php?kw=' + newValue)
          .success(function (data) {
            console.log(data);
            if(data.length>0)
            {
              $scope.dishList = data;
            }
          })*/
        $kflHttp.sendRequest(
          'data/dish_getbykw.php?kw=' + newValue
          ,
          function (data) {
            console.log(data);
            if(data.length>0)
            {
              $scope.dishList = data;
            }
          }
        )
      }
    });
  }
])

app.controller('detailCtrl',
  ['$scope','$kflHttp', '$stateParams',function ($scope,$kflHttp,$stateParams) {
    //接收到参数
    console.log($stateParams);
    $kflHttp.sendRequest(
      'data/dish_getbyid.php?did='+$stateParams.did,
      function (data) {
        console.log(data);
        $scope.dish = data[0];
      }
    )

}])

app.controller('orderCtrl',
  ['$scope','$kflHttp','$stateParams','$httpParamSerializerJQLike',
    function ($scope,$kflHttp,$stateParams,$httpParamSerializerJQLike) {
      console.log($stateParams);

      $scope.submitResult= "";

      $scope.order = {
        user_name:'',
        sex:'',
        phone:'',
        addr:'',
        did:$stateParams.did
      }

      //$httpParamSerializerJQLike
      $scope.submitOrder = function () {
        //验证当前用户输入数据的完整性
        console.log( $scope.order);
        //如果数据是完整的，可以将对象处理成urlEncoded字符串：sex=1&addr=&...
        var result = $httpParamSerializerJQLike($scope.order);
        console.log(result);
        //发给服务器
        $kflHttp.sendRequest(
          'data/order_add.php?'+result,
          function (data) {
            console.log(data);
            if(data)
            {
              if(data.msg == 'success')
              {
                sessionStorage.setItem(
                  'phone',$scope.order.phone);
                $scope.submitResult = "下单成功，订单编号为:"+data.oid;
              }
              else if(data.msg == 'error'){
                $scope.submitResult = "下单失败";
              }
            }
          }
        )
      }

  }])

app.controller('myOrderCtrl',
  ['$scope','$kflHttp',
    function ($scope,$kflHttp) {
      $scope.orderList = [];
      //取得下单成功时的手机号
      var myPhone = sessionStorage.getItem('phone');
      console.log(myPhone);
      //根据手机号 发起网络请求，拿数据回来
      $kflHttp.sendRequest(
        'data/order_getbyphone.php?phone='+myPhone,
        function (data) {
          console.log(data);
          $scope.orderList = data;
        }
      )
  }])








