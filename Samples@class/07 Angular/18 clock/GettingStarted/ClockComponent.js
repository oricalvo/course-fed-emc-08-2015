(function () {

    function ClockController($scope, $interval, $attrs) {
        $scope.time = new Date();

        $scope.format = "HH:mm:ss";

        var intervalId = $interval(function () {
            $scope.time = new Date();

            $scope.onTick({ abc: $scope.time });
        }, 1000);

        if ($attrs.name) {
            $scope.$parent[$attrs.name] = {
                start: function () {
                },

                stop: function () {
                    $interval.cancel(intervalId);
                }
            };
        }
    }

    angular.module("MyApp").directive("clock", function () {
        return {
            templateUrl: "/Clock.html",
            controller: ClockController,
            scope: {
                format: "=",
                onTick: "&",
            }
        };
    });

})();
