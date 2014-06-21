var app = angular.module('mySite', []);

app.controller('FormController', ['$scope', function ($scope) {
    $scope.name = '';
    $scope.email = '';
    $scope.mesage = '';

    $scope.submit = function () {
        console.log($scope.name, $scope.email, $scope.mesage);
    };
}]);
