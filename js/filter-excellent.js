app.filter("filterExcellent", function() {
    return function(item) {
        //筛选优秀项目
        var arr = [];
        angular.forEach(item, function(value, key) {
            if (value.excellent) {
                arr.push(value);
            }
        });
        console.log(arr);
        return arr;
    };
});