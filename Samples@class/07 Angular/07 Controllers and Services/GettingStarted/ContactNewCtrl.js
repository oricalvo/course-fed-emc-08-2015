(function () {

    function ContactNewCtrl($scope, contactService) {
        $scope.save = function () {
            if (!$scope.name) {
                return;
            }

            var contact = { id: -1, name: $scope.name };
            contactService.add(contact);
        }
    }

    angular.module("MyApp").controller("ContactNewCtrl", ContactNewCtrl);

})();
