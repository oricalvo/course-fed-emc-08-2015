(function () {

    function ContactIndexCtrl($scope, contactService) {

        $scope.message = "Hello";

        setTimeout(function () {
            //$("div[ng-controller=ContactIndexCtrl]").append("{{message}}");

            //console.log("Append");
            $scope.message = "XXX";

            $scope.$apply();
        }, 2000);

        $scope.contacts = contactService.getAll().map(function (contact) {
            return {
                name: contact.name,
                selected: false,
            };
        });

        $scope.$on("contactAdded", function (e, contact) {
            //$scope.contacts.push({
            //    name: contact.name,
            //    selected: false,
            //});

            $scope.contacts = contactService.getAll().map(function (contact) {
                return {
                    name: contact.name,
                    selected: false,
                };
            });
        });

        $scope.delete = function () {
            var count = 0;

            $scope.contacts.forEach(function (contact) {
                count += (contact.selected * 1);
            });

            confirm("Delete " + count + " contacts ?", function () {
            });
        }
    }

    angular.module("MyApp").controller("ContactIndexCtrl",
        [
            "$scope", 
            "contactService",
            ContactIndexCtrl
        ]);

})();
