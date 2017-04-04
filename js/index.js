var app = angular.module("bunflyApp", ["ui.router", "ngAnimate"]);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("excellent", {
            url: "/",
            templateUrl: "tpl/excellent.html"
        })
        .state("all", {
            url: "/all",
            templateUrl: "tpl/all.html"
        })
}]);

app.controller("BunflyCtrl", ["$scope", "getData", function($scope, getData) {
    getData.success(function(res) {
        $scope.items = res.items;
    }).error(function(err) {
        console.log(err);
    });
}]);

app.factory("getData", ["$http", function($http) {
    return $http.get("data/items.json");
}]);