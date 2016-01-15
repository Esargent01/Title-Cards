var app = angular.module('lazyLoad', []);

app.controller('loadCtrl', function ($scope, $http){

    $http.get('http://www.stellarbiotechnologies.com/media/press-releases/json')
        .success(function(data) {
            $scope.contents=data.news;
        });
});