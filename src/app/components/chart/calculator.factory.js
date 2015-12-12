(function () {
  angular.module('physics').factory('Calulator', Calulator);

  /** @ngInject */
  function Calulator () {
    return Object.create({
      calculate : calculate
    }, {});

    /*Random Data Generator */
    function calculate(capacity, voltage, resistance, chargingOrDischarding) {
      switch (chargingOrDischarding) {
        case 'charging' :
          var values = [];
          for (var i = 0; i <= 10; i+=0.1) {
            values.push({
              x: i, 
              y: charging(i, voltage, resistance, capacity)
            }); 
          }

          return [{
            values: values,
            key: 'Зарядження',
            color: '#ff7f0e'
          }];
          break;
        case 'discharging' :
          var values = [];
          for (var i = 0; i <= 10; i+=0.1) {
            values.push({
              x: i, 
              y: discharging(i, voltage, resistance, capacity)
            }); 
          }

          return [{
            values: values,
            key: 'Розрядження',
            color: '#ccc'
          }];
          break;
        case 'chargingDischarding' :
          var valuesCharging = [],
              valuesDischarging = [];

          for (var i = 0; i <= 10; i+=0.1) {
            valuesCharging.push({
              x: i, 
              y: charging(i, voltage, resistance, capacity)
            });
            valuesDischarging.push({
              x: i,
              y: discharging(i, voltage, resistance, capacity)
            }); 
          }

          return [{
            values: valuesCharging,
            key: 'Зарядження',
            color: '#ff7f0e'
          }, {
            values: valuesDischarging,
            key: 'Розрядження',
            color: '#ccc'
          }];
          break;
      }
      // var values = [];

      // //Data is represented as an array of {x,y} pairs.
      // for (var i = 0; i <= 10; i+=0.1) {
      //   values.push({
      //     x: i, 
      //     y: chargingOrDischarding ? 
      //         charging(i, voltage, resistance, capacity) : 
      //         discharging(i, voltage, resistance, capacity)
      //   });
      // }

      // return [{
      //   values: values,
      //   key: chargingOrDischarding ? 'Зарядження' : 'Розрядження',
      //   color: '#ff7f0e'
      // }];
    }

    function charging (i, voltage, resistance, capacity) {
      return voltage * ( 1 - Math.exp( -1 * ( i / (resistance * capacity) ) ) );
    }

    function discharging (i, voltage, resistance, capacity) {
      return voltage * Math.exp( -1 * ( i / (resistance * capacity) ) );
    }
  }

})();