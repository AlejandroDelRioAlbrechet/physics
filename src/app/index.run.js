(function() {
  'use strict';

  angular
    .module('physics')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
