function HomeCtrl($scope) {
    $scope.message = "Hello Angular";

    $scope.emailContent = "<h1>Title</h1><p>Hello, how are you ?</p><script>alert('xxx');</script>";
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);