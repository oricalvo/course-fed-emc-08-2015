function ContactIndexCtrl($scope, contactService) {
    function updateContacts() {
        $scope.contacts = contactService.getAll().map(function (contact) {
            return {
                name: contact.name,
                selected: false,
            };
        });
    }

    $scope.remove = function () {
        var counter = 0;
        $scope.contacts.forEach(function (contact) {
            if (contact.selected) {
                ++counter;
            }
        });

        alert(counter + " contacts are selected");
    }

    $scope.$on("contactAdded", function () {
        updateContacts();
    });

    updateContacts();
}

angular.module("MyApp").controller("ContactIndexCtrl", ContactIndexCtrl);