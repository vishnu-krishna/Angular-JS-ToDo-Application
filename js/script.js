var app = angular.module("mytodoController", []);
app.controller("myCtrl", function ($scope) {
    $scope.products = ["Take Pendrive", "Go for dinner with my friend", "Buy flowers"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {
            $scope.error = false;
            $scope.errortext = "Enter something and press Add";
            return;
        }
        if ($scope.addMe) {
            $scope.error = false;
        }
        var tobeAdded = true;
        $scope.products.some(function (product) {
            var lower = product.toLowerCase();
            if (lower === $scope.addMe) {
                $scope.errortext = "The item is already in your ToDo list.";
                tobeAdded = false;
                return true;
            }
     
        });
        if (tobeAdded) {
            $scope.products.push($scope.addMe);
        }

        $scope.addMe = null;
    }
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});