var app = angular.module('mySite', []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.projects = [{
        id:   1,
        name: 'Project 1'
    }, {
        id:   2,
        name: 'Project 2'
    }];
}]);

app.controller('ProjectDetailController', ['$scope', '$sce', function ($scope, $sce) {
    $scope.project = {
        id:      1,
        name:    'Project 1',
        content: $sce.trustAsHtml('<p>Hello world!</p>')
    };
}]);

app.controller('FormController', ['$scope', function ($scope) {
    $scope.name = '';
    $scope.email = '';
    $scope.mesage = '';

    $scope.submit = function () {
        console.log($scope.name, $scope.email, $scope.mesage);
    };
}]);
