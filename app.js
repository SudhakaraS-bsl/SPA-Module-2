(function () {
    'use strict';

    angular.module('Assignment2App', [])

        .controller('Assignment2Controller', function ($scope) {

            $scope.name = "Module-2 Coding Assignment";
            $scope.message1 = "";
            $scope.message2 = "";

            $scope.shoppingItems = [
                { name: "cookies", quantity: 10 },
                { name: "donuts", quantity: 5 },
                { name: "chips", quantity: 10 },
                { name: "fries", quantity: 10 },
                { name: "cakes", quantity: 10 },
            ];
            $scope.BoughtItems = [];

            if ($scope.shoppingItems.length == 0) { $scope.message1 = "(Everything is bought!)"; }
            else { $scope.message1 = ""; }

            if ($scope.BoughtItems.length == 0) { $scope.message2 = "(Nothing bought yet)"; }
            else { $scope.message2 = ""; }

            $scope.BoughtItem = function (quantity, name) {

                var item = { name: name, quantity: quantity };
                $scope.BoughtItems.push(item);
                for (var i = 0; i < $scope.shoppingItems.length; i++) {
                    if ($scope.shoppingItems[i].name == name) {
                        $scope.shoppingItems.splice(i, 1); // removes the matched element
                        i = $scope.shoppingItems.length;  // break out of the loop. Not strictly necessary
                    }
                }

                if ($scope.shoppingItems.length == 0) { $scope.message1 = "(Everything is bought!)"; }
                else { $scope.message1 = ""; }
                if ($scope.BoughtItems.length == 0) { $scope.message2 = "(Nothing bought yet)"; }
                else { $scope.message2 = ""; }
            };

        });
})();