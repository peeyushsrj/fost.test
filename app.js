var app = angular.module('myApp', []);
var url1 = "https://3k8nooux38.execute-api.us-east-1.amazonaws.com/prod"
var url2 = 'https://api.fosting.in/api2' 

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    $http({
        method: 'POST',
        url: url2,
        data: {
            key1: "a",
            key2: "b",
            key3: "c"
        },
        withCredentials: false,
    }).then(function successCallback(response) {
        console.log(response);
        $scope.x = response.data;
    }, function errorCallback(response) {
        console.log('Error: ', response);
    });
});

