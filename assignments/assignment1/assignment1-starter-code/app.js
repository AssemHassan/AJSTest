(function () {
  'use strict';

  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {

    $scope.dishes = '';
    var msg = '';
    $scope.sayMessage = function () {

      return msg;
    };

    $scope.checkIf2Much = function () {
      var elements = $scope.dishes.split(',');
      if (elements.length == 1 && elements[0].length == 0 )
        msg = 'Please input dishes';
      else {
        if (elements.length > 3)
          msg = 'Too much!';
        else if (elements.length < 4)
          msg = 'Enjoy!';
      }
    };
  }

})();
