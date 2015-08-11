(function () {

    function ContactServiceFactory($rootScope) {
        var contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];

        var service = {
            getAll: function () {
                return contacts;
            },

            add: function (contact) {
                contacts.push(contact);

                $rootScope.$broadcast("contactAdded", contact);
            },
        };

        return service;
    }

    angular.module("MyApp").factory("contactService", ContactServiceFactory);

})();
