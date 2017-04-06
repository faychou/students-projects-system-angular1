var app = angular.module("bunflyApp", ["ui.router", "ngAnimate"]);

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

    }]);