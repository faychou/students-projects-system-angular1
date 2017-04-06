app.factory("getData", ["$http", function($http) {
    return $http.get("data/items.json");
}]);