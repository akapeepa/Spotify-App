//Controller
app.controller('landingController',['$scope', '$http', 'spotifySearch', function($scope, $http, spotifySearch){
  var vm = this;

  console.log("setup");

  vm.getData = function(q, type){
    return $http.get('https://api.spotify.com/v1/search?q=purpose&type=album', {
      headers: {'Authorization': 'Bearer BQAI9ENd6pxBQGQZc8ofyfp8vMJqswplnY08oU0imNVo3KlGjucuWIYSX1zyZKUCOPjXsnbSiQ3pTFkS-gx1U2lbfFwUq1NPlCz_hdm54_JY7WRA2oVux2cU76AR1NR6TL9OUimnBVy_aIvUsaHgZcf2JWcUpx_8wZG5UNOQE_J3cQ-OFSQpkwt1MxzCSgcfvLEFlKgpuFVl9-PpJQTG_qPr70bYMskYs-YTZqPcNXFsH60HYyoRcLcEfEp_FvXnEGLzBg4VuFMOukdSLlLqMIwhbSWGj60u3ebrWEQdiDCnXO9K0w' }
    });
  };

  var x = vm.getData();
  console.log(x);


}]);
