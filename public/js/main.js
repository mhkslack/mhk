
var myApp = angular.module('socketApp',['btford.socket-io']).
factory('mySocket', function (socketFactory) {
    return socketFactory();
});

myApp.controller('sController', ['$scope', function($scope) {

    $scope.mustafa ="asdasdasdasdasd";
    var socket = io.connect();
     $scope.$on('data',function(data){
         $scope.mustafa =data;
    });
}]);

