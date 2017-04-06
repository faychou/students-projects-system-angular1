app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
}]);