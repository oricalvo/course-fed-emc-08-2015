function ContactNewCtrl($scope, contactService) {
    $scope.add = function () {
        var contact = { name: $scope.name };

        contactService.add(contact);
    }
}

angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);