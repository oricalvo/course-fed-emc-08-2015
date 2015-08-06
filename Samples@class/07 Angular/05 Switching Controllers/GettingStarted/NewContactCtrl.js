function NewContactCtrl($scope, router) {
    $scope.router = router;
}

angular.module("MyApp").controller("NewContactCtrl", NewContactCtrl);