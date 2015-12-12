(function () {
  angular.module('physics').factory('Calulator', Calulator);

  /** @ngInject */
  function Calulator () {
    return Object.create({
      calculate : calculate
    }, {});

    /*Random Data Generator */
    function calculate(capacity, voltage, resistance, chargingOrDischarding) {
      var res;

      switch (chargingOrDischarding) {
        case 'charging' :
          var values = [];
          for (var i = 0; i <= 10; i+=0.1) {
            values.push({
              x: i, 
              y: charging(i, voltage, resistance, capacity)
            }); 
          }

          res = [{
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

          res = [{
            values: values,
            key: 'Розрядження',
            color: '#669c3b'
          }];
          break;
        case 'chargingDischarging' :
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

          res = [{
            values: valuesCharging,
            key: 'Зарядження',
            color: '#ff7f0e'
          }, {
            values: valuesDischarging,
            key: 'Розрядження',
            color: '#669c3b'
          }];
          
          break;
      }
      return res;
    }

    function charging (i, voltage, resistance, capacity) {
      return voltage * ( 1 - Math.exp( -1 * ( i / (resistance * capacity) ) ) );
    }

    function discharging (i, voltage, resistance, capacity) {
      return voltage * Math.exp( -1 * ( i / (resistance * capacity) ) );
    }
  }

})();