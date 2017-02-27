//Controller
app.controller('landingController',['$scope', '$resource', 'spotifyService', function($scope, $resource, spotifyService){

  var vm = this;

  vm.searchQuery = '';
  vm.searchType = 'track';

  vm.search = function() {
    var results = spotifyService.getResults(vm.searchQuery, vm.searchType);
    results.$promise.then(function(data) {
      console.log(data);
      vm.data = data.tracks || data.artists || data.albums;
      vm.items= vm.data.items;
      vm.name = vm.items["0"].artists["0"]
      console.log(vm.name.name);

      console.log(vm.items);
    });

  };


  $scope.propertyName = '';
  $scope.reverse = true;
  $scope.data = $scope.data;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };


}]);
