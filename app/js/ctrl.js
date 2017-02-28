//Controller
app.controller('landingController',['$scope', '$resource', 'spotifyService', function($scope, $resource, spotifyService){

  var vm = this;

  vm.searchQuery = '';
  vm.searchType = 'track';
  vm.limit = 50;

  vm.search = function() {
    var results = spotifyService.getResults(vm.searchQuery, vm.searchType , vm.limit);
    results.$promise.then(function(data) {
      // console.log(data);
      vm.data = data.tracks || data.artists || data.albums;
      // vm.data = vm.data.items;
      console.log(vm.data);
      vm.items= vm.data.items;
      vm.name = vm.items["0"].artists["0"] || vm.items.name;
      // console.log(vm.name.name);

      console.log(vm.items);
    });

  };


  // $scope.propertyName = '';
  // $scope.reverse = true;
  // $scope.items = $scope.items;
  //
  // $scope.sortBy = function(propertyName) {
  //   $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
  //   $scope.propertyName = propertyName;
  // };

  $scope.orderByField = 'Name';
  $scope.reverseSort = false;


}]);
