var qqq = angular.module('qqq',[]);


qqq.directive('typedjs', function() {
  return {
    restrict: 'E',

    scope: {
      strings: '='
    },
    template: '<h3 id="typed-output" class="text-center"></h3>',

    link: function(scope, element, attrs) {

      var options = {
        strings: scope.strings,
        typeSpeed: 2,
        contentType: "html",
        showCursor: true,
        cursorChar: "_",
        loop:true
      };

      $(function() {
        $("#typed-output").typed(options);
      });

    }
  };
});