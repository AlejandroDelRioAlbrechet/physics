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
    function ChartController ($scope, Calulator) {
      var vm = this;

      $scope.capacity   = 1;
      $scope.voltage    = 100;
      $scope.resistance = 1;
      $scope.dueTo      = 'charding';

      $scope.options = {
        chart: {
          type: 'lineChart',
          height: 427,
          margin : {
            top: 20,
            right: 20,
            bottom: 40,
            left: 55
          },
          x: function(d){ return d.x; },
          y: function(d){ return d.y; },
          yDomain : [0, 200],
          xDomain : [0, 10],
          useInteractiveGuideline: true,
          dispatch: {
            stateChange: function(e) { console.log("stateChange"); },
            changeState: function(e) { console.log("changeState"); },
            tooltipShow: function(e) { console.log("tooltipShow"); },
            tooltipHide: function(e) { console.log("tooltipHide"); }
          },
          xAxis: {
            axisLabel: 'Час (мкС)',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            }
          },
          yAxis: {
            axisLabel: 'Напруга (В)',
            tickFormat: function(d){
              return d3.format('.02f')(d);
            },
            axisLabelDistance: -10,
            domain : [ 0, 400 ]
          }
        }
      };

      $scope.dueTo = 'charging';
      $scope.data = Calulator.calculate($scope.capacity, $scope.voltage, $scope.resistance, $scope.dueTo);

      $scope.changed = function () {
        var data = Calulator.calculate($scope.capacity, $scope.voltage, $scope.resistance, $scope.dueTo);
        console.log(data);
        $scope.data = data;
      };

      // function isChardging () {
      //   return $scope.dueTo === 'charding';
      // }
    }
  }

})();