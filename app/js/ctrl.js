//Controller
app.controller('landingController',['$scope', '$http', 'spotifySearch', function($scope, $http, spotifySearch){
  var vm = this;

  console.log("setup");

  vm.getData = function(q, type){
    return $http.get('https://api.spotify.com/v1/search?q=coldplay&type=artist', {
      headers: {'Authorization': 'Bearer BQDz44LNRI7_Xd7Rmyu-x_YjAu5S9NJVuT8C5nmdnfLBIucV5sAizpBUfMQqJqA5XS0L4SuGxJZAf-gFiBvh05Ib16Z9df9_zzTwfN2bzuIFaFnQ-VFMEVKLIjkIKjIfpp2T-P3j23vTDrSO0ZCPpyqyESjnsEayQ1EOm1ztPZ7Tb8ihlaoFf1lm6DQLOnRu0GunlPg2X_Ze4aalNPcHUbMLXO37DvUmGoWDe5O0GfbACpiyMvYBYghDnJTzU9CEQyBwP03_jIFjQsiwsvOxo91QYW-s5MQ25QNhSWmRQWm87sFxmQ' }
    });
  };

  var x = vm.getData();
  console.log(x);


}]);
