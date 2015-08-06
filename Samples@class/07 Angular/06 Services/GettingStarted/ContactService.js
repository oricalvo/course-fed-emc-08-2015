(function () {

    function ContactServiceFactory($rootScope) {
        var contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        return {
            getAll: function () {
                return contacts;
            },
            add: function (contact) {
                contacts.push(contact);

                $rootScope.$broadcast("contactAdded", contact);
            }
        };
    }

    angular.module("MyApp").factory("contactService", ContactServiceFactory);

})();
