define(["ServiceLocator"], function (serviceLocator) {
    var logger = {};

    serviceLocator.register("logger", logger);

    console.log(serviceLocator.resolve("logger") == logger);
});
