function HomeCtrl($scope, logger) {
    $scope.message = "Hello Angular";

    $scope.sayHello = function () {
        logger.debug("Hello logger");
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);