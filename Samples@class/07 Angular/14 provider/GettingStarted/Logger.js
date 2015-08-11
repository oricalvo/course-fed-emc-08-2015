(function () {

    var provider = {
        $get: function () {
            console.log("logger.$get");

            var service = {
                debug: function (msg) {
                    console.log(msg);
                }
            };

            return service;
        },

        setErrorLevel: function () {
            console.log("setErrorLevel");
        }
    };

    angular.module("MyApp").provider("logger", provider);

})();
