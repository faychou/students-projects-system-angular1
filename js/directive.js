app.directive("excellentItem", function() {
    return {
        restrict: "AE",
        replace: "true",
        scope: {
            item: "="
        },
        templateUrl: "tpl/excellent-item.html"
    }
}).directive("allItem", function() {
    return {
        restrict: "AE",
        replace: "true",
        scope: {
            item: "="
        },
        templateUrl: "tpl/all-item.html"
    }
});