//Service
app.service('spotifySearch',function($http){
  var vm = this;

  vm.getData = function(q,type){
    return $http.get('https://api.spotify.com/v1/search', {
      headers: {'Authorization': 'Bearer BQAoU4-20JRKFYl1RluHYohUaOVj8GR2Q7F6h1Efkif9ruVG2LcW00OLG-PjmVDAQhJSFnWDUbAFcJLSk28NR5x6xwB3gqcd14h50qGm4UZB_g7Obg3jgU83J-VmCBaryxnTQLvFFKFGairk-p80Jr_uC4PhRL1wXi_vEZvLZbBL5S7B45tjpZL23tgoPzgA-uy-qu-pkD1y2F0moNkALpUWk3qEF_0eGTFjYzxxDFbCpDwcUYE_mDU4C9Kjil2WhR3y5fIuTg9IBuCqq_YYCW0RRvgWfDz6M9L3jDCd1Ulqh-GYNQ' }
    });
  };
});
