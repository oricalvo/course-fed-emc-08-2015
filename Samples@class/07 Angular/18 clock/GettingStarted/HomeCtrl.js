function HomeCtrl($scope) {
    $scope.format = "HH:mm";

    $scope.change = function () {
        $scope.format = "ss";
    }

    $scope.onClockTick = function (time) {
        console.log("Tick: " + time);
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);