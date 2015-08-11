(function () {

    angular.module("MyApp").factory("contactService", function ($http, $q) {
        var contacts = null;

        return {
            getAll: function () {
                if (contacts) {
                    console.log("cache");

                    return $q.when(contacts);
                }

                console.log("$http");

                return $http.get("/contacts.html").then(function (response) {
                    return contacts = response.data;
                });
            }
        };
    });

})();
