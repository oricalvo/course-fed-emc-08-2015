function HomeCtrl($scope, contactService) {
    $scope.message = "Hello Angular";

    $scope.refresh = function () {
        contactService.getAll()
            .then(function (contacts) {
                $scope.contacts = contacts;
            });
    }

    $scope.refresh();
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);