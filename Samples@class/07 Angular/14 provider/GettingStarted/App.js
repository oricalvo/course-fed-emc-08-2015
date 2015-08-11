angular.module("MyApp", [])
    .config(function (loggerProvider) {
        loggerProvider.setErrorLevel();
    })
    .run(function () {
    });


