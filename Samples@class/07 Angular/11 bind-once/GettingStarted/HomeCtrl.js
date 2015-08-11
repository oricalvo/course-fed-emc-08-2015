function HomeCtrl($scope) {
    $scope.dump = function () {
        console.table($scope.contacts);
    }

    var ori = { id: 1, name: "Ori" };
    var roni = { id: 2, name: "Roni" };

    $scope.contacts = [
        ori,
        roni,
        ori,
    ];
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);