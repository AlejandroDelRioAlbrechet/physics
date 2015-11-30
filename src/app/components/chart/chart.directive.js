(function() {
  'use strict';

  angular
    .module('physics')
    .directive('chart', chart);

  /** @ngInject */
  function chart() {
    var directive = {
      restrict         : 'E',
      templateUrl      : 'app/components/chart/chart.html',
      scope            : {},
      controller       : ChartController,
      controllerAs     : 'vm',
      bindToController : true
    };

    return directive;

    /** @ngInject */
    function ChartController ($scope) {
      var vm = this;
    }
  }

})();