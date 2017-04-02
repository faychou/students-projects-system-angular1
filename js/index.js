var app = angular.module("bunflyApp", ["ngAnimate"]);
app.controller("BunflyCtrl", ["$scope", function($scope) {

}]);
app.directive("excellentItem", function() {
    return {
        restrict: "AE",
        replace: "true",
        templateUrl: "tpl/excellent-item.html"
    }
});