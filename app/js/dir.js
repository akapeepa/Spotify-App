app.directive('tooltip', function(){
  return {
    restrict: 'AC',
    link: function(scope, element, attrs){
      $(element).hover(function(){
        // on mouseenter
        $(element).tooltip('show');
      }, function(){
        // on mouseleave
        $(element).tooltip('hide');
      });
    }
  };
});
