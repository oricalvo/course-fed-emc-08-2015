function HomeCtrl($scope, $rootScope) {
    $scope.birthday = new Date();

    $rootScope.dateFormat = 'dd/MM/yyyy';
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

angular.module("MyApp").filter("xxx", function () {
    return function (val) {
        return "XXX";
    }
});
