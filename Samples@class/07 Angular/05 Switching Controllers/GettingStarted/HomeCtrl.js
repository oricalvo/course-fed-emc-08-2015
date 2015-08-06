function HomeCtrl($scope, router) {
    var nextId = 1000;

    $scope.router = router;

    $scope.contacts = [
    ];

    $scope.add = function () {
        var contact = { id: ++nextId, name: $scope.name };

        $scope.contacts.push(contact);
    }

    $scope.remove = function (index) {
        $scope.contacts.splice(index, 1);
    }
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);