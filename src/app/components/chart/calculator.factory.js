(function () {
  angular.module('physics').factory('Calulator', Calulator);

  /** @ngInject */
  function Calulator () {
    return Object.create({
      calculate : sinAndCos
    }, {});

    /*Random Data Generator */
    function sinAndCos(capacity, voltage, resistance, chargingOrDischarding) {
      var values = [];

      //Data is represented as an array of {x,y} pairs.
      for (var i = 0; i <= 8; i+=0.1) {
        values.push({
          x: i, 
          y: chargingOrDischarding ? 
              charging(i, voltage, resistance, capacity) : 
              discharging(i, voltage, resistance, capacity)
        });
      }

      return [{
        values: values,
        key: 'Charge',
        color: '#ff7f0e'
      }];
    }

    function charging (i, voltage, resistance, capacity) {
      return voltage * ( 1 - Math.exp( -1 * ( i / (resistance * capacity) ) ) );
    }

    function discharging (i, voltage, resistance, capacity) {
      return voltage * Math.exp( -1 * ( i / (resistance * capacity) ) );
    }
  }

})();