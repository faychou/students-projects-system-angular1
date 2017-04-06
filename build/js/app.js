// 小屏幕设备下，点击导航，自动收起导航条
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// 设置导航离开顶部特效
$('#navbar').affix({
    offset: {
        top: 1
    }
});
console.log($("#showPro").width());
// 动态更换logo
$(window).scroll(function() {
    if ($('#navbar').hasClass('affix')) {
        $('.logo').attr('src', 'image/com/bf-logo.png');
        $('.navbar-inverse .navbar-toggle .icon-bar').css({ 'backgroundColor': '#000' });
    } else {
        $('.logo').attr('src', 'image/com/bf-w-logo.png');
        $('.navbar-inverse .navbar-toggle .icon-bar').css({ 'backgroundColor': '#fff' });
    }
});;var app = angular.module("bunflyApp", ["ui.router", "ngAnimate"]);

app.controller("BunflyCtrl", ["$scope", "getData", "$location", function($scope, getData, $location) {
        $location.url("/#/");
        getData.success(function(res) {
            $scope.items = res.items;
        }).error(function(err) {
            console.log(err);
        });
        $scope.w = document.documentElement.clientWidth || document.body.clientWidth;
        $scope.y = document.documentElement.clientHeight || document.body.clientHeight;
    }])
    .controller("PersonCtrl", ["$scope", function($scope) {

    }]);;app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("");
    $stateProvider
        .state("main", {
            url: "",
            templateUrl: "tpl/main.html"
        })
        .state("main.excellent", {
            url: "/",
            templateUrl: "tpl/excellent.html"
        })
        .state("main.all", {
            url: "/all",
            templateUrl: "tpl/all.html"
        })
        .state("faychou", {
            url: "/faychou",
            controller: "PersonCtrl",
            template: "<iframe id='showPro' width='{{w}}' height='{{y}}' frameborder='0' src='projects/blog/index.html'></iframe>"
        });
}]);;app.factory("getData", ["$http", function($http) {
    return $http.get("data/items.json");
}]);;app.directive("excellentItem", function() {
    return {
        restrict: "AE",
        replace: "true",
        scope: {
            item: "="
        },
        templateUrl: "tpl/excellent-item.html"
    };
}).directive("allItem", function() {
    return {
        restrict: "AE",
        replace: "true",
        scope: {
            item: "="
        },
        templateUrl: "tpl/all-item.html"
    };
});