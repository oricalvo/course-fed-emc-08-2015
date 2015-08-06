function SiteMenuCtrl($scope, $rootScope, router) {
    $scope.router = router;
}

angular.module("MyApp").controller("SiteMenuCtrl", SiteMenuCtrl);

