angular.module("MyApp").factory("router", function () {
    return {
        page: "home",
        goto: function (page) {
            this.page = page;
        }
    };
});
