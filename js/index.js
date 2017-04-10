var app = angular.module("bunflyApp", ["ui.router", "ngAnimate"]);
app.controller("BunflyCtrl", ["$scope", "getData", function($scope, getData) {
        getData.success(function(res) {
            $scope.items = res.items;
        }).error(function(err) {
            console.log(err);
        });
        $scope.w = document.documentElement.clientWidth || document.body.clientWidth;
        $scope.y = document.documentElement.clientHeight || document.body.clientHeight;

        // 实现 dom 渲染完毕后加载js
        $scope.$on('$viewContentLoaded', function() {
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
            // 动态更换logo
            $(window).scroll(function() {
                if ($('#navbar').hasClass('affix')) {
                    $('.logo').attr('src', 'build/images/com/bf-logo.png');
                    $('.navbar-inverse .navbar-toggle .icon-bar').css({ 'backgroundColor': '#000' });
                } else {
                    $('.logo').attr('src', 'build/images/com/bf-w-logo.png');
                    $('.navbar-inverse .navbar-toggle .icon-bar').css({ 'backgroundColor': '#fff' });
                }
            });
        });
    }])
    .controller("PersonCtrl", ["$scope", function($scope) {

    }]);