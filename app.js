var app = angular.module('mySite', ['ngRoute']);

app.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'project.html',
                controller:  'ProjectController'
            })
            .when('/project/:id', {
                templateUrl: 'project-detail.html',
                controller:  'ProjectDetailController'
            })
            .when('/about-me', {
                templateUrl: 'about.html'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller:  'FormController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.hashPrefix('!');
}]);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.projects = [{
        id:   1,
        name: 'Project 1'
    }, {
        id:   2,
        name: 'Project 2'
    }];
}]);

app.controller('ProjectController', ['$scope', function ($scope) {
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
