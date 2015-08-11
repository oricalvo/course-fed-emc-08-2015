function HomeCtrl($scope) {
    $scope.message = "Hello Angular";

    $scope.save = function () {
        console.log($scope.form);
        console.log("VALID: " + $scope.form.$valid);
        console.log("VALID(name): " + $scope.form.name.$valid);
        console.log("VALID(email): " + $scope.form.email.$valid);

        if (!$scope.form.$valid) {
            return;
        }
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);