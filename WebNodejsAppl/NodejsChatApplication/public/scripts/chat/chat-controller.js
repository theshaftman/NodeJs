(function (window, angular, undefined) {
    angular.module("chatApp")
        .controller("chatCtrl", ["$rootScope", "$scope", function ($rootScope, $scope) {
            var vm = this;
            var socket = window.io("localhost:3000/");
            vm.newMessage = undefined;
            vm.messages = [];
            
            socket.emit("test", "we are passing in a message");
            socket.on("receive-message", function (msg) {
                $scope.$apply(function () {
                    vm.messages.push(msg);
                });
            });
            
            vm.username = undefined;
            vm.sendMessage = function () {
                var newMessage = {
                    username: vm.username,
                    message: vm.newMessage
                }
                socket.emit("new-message", newMessage);
                vm.newMessage = undefined;
            };
            
            $rootScope.$on("new-user", function (event, username) {
                vm.username = username;
            });
            
            $scope.$watch(function () {
                return vm.username;
            }, function () {
                if (vm.username) {
                    // console.log("This is the username", vm.username);
                }
            });
        }]);
}(window, window.angular));