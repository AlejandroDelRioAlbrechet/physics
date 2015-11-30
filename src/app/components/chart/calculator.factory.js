(function () {
  angular.module('physics').factory('Calulator', Calulator);

  /** @ngInject */
  function Calulator () {
    return Object.create({
      calculate : sinAndCos
    }, {});

    /*Random Data Generator */
    function sinAndCos(capacity, voltage, resistance) {
      var sin = [],
          cos = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: Math.sin((i + capacity / 2 ) / 10)});
        cos.push({x: i, y: .5 * Math.cos(i / voltage + 2) - resistance / 10});
      }

      return [{
        values: sin,
        key: 'Charge',
        color: '#ff7f0e'
      }, {
        values: cos,
        key: 'Discharge',
        color: '#2ca02c'
      }];
    };
  }

})();