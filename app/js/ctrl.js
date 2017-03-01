//Controller
app.controller('landingController',['$scope', '$window' ,  '$document', '$resource',  'spotifyService', function($scope, $window ,$document,  $resource,  spotifyService){

  var vm = this;

  vm.searchQuery = '';
  vm.searchType = 'track';
  vm.limit = 50;

  vm.search = function() {
    var results = spotifyService.getResults(vm.searchQuery, vm.searchType , vm.limit);
    results.$promise.then(function(data) {
      vm.data = data.tracks || data.artists || data.albums;
      vm.items= vm.data.items;
      console.log(vm.data);
      function compare(a,b) {
        if (a.popularity < b.popularity)
        return -1;
        if (a.popularity > b.popularity)
        return 1;
        return 0;
      }
      vm.items.sort(compare);
      vm.name = vm.items["0"].artists["0"] || vm.items.name;
      gotoResults();
    });
  };

  $scope.orderByField = 'Name';
  $scope.reverseSort = false;

  vm.isMobile = false;
  var screenWidth = $window.innerWidth;
  if (screenWidth < 768){
    vm.isMobile = true;
  }

  // Smooth Scroll To Results
  function gotoResults() {
    $document.scrollTo( 0, 700, [1000] );
  };

}]);
