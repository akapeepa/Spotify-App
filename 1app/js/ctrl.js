//Controller
app.controller('landingController',['$scope', '$window' ,  '$document', '$resource',  'spotifyService', function($scope, $window ,$document,  $resource,  spotifyService){

  var vm = this;

  vm.searchQuery = '';
  vm.searchType = 'track';


  // millisToMinutesAndSeconds
  function durationConversion(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  // Audio Preview
  vm.play = function(song, index) {
    vm.isPlaying = index;
    console.log(vm.isPlaying);
    var flag = 1;//pause previous
    if(vm.audio_curr != null){
      vm.pause(index,flag);
    }
    vm.audio_curr = new Audio(song);
    vm.audio_curr.play();
  };

  vm.pause = function( index,flag) {
    vm.audio_curr.pause();
    if(flag==1){
      vm.isPlaying = index;
    }
    else{//pause current
      vm.isPlaying = null;
    }
    vm.audio_curr = null;
  }
  // vm.isPlaying[index] = false;

  vm.search = function() {
    var results = spotifyService.getResults(vm.searchQuery, vm.searchType , 50);
    results.$promise.then(function(data) {
      vm.data = (data.tracks || data.artists || data.albums).items;
      console.log(vm.data);

      vm.songs = [];
      var i = 0;
      angular.forEach(vm.data, function(value, key){
        // console.log(value);
        var obj = {};
        obj.index = 'song'+i ; i++;
        obj.track = value.name;
        // console.log(value.name);
        obj.preview = value.preview_url;
        // obj.duration = durationConversion(value.duration_ms);
        obj.popularity = value.popularity;
        obj.album = value.album.name;
        obj.artist = value.album.artists[0].name;
        obj.logo = value.album.images[2].url;
        vm.songs.push(obj);
      });

      console.log(vm.songs);

      gotoResults();
    });
  };

  vm.isMobile = false;
  var screenWidth = $window.innerWidth;
  if (screenWidth < 768){
    vm.isMobile = true;
  }

  // Smooth Scroll To Results
  function gotoResults() {
    $document.scrollTo( 0, 700, [1000] );
  };

  vm.sortType     = 'popularity'; // set the default sort type
  vm.sortReverse  = true;  // set the default sort order
  vm.searchSong   = '';     // set the default search/filter term

}]);
