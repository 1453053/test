
angular.module('SneakersApp', ["firebase"]).controller('SneakersAppCtrl', ['$scope', '$firebaseObject', function($scope, $firebaseObject){
    var ref = firebase.database().ref();
    var vm = this;
    window.sc = vm;
    vm.items = $firebaseObject(ref.child("Items"));
    /*var obj = $firebaseObject(ref);
    /*this.obj.$bindTo($scope,'data');
    window.sc = $scope;*/
    $scope.id = "bin";
}]);