(function(){
    'use strict';

    angular
        .module('shipItApp')
        .factory('shipitappsService', ShipitappsService);

    ShipitappsService.$inject = ['Restangular'];

    function ShipitappsService(Restangular) {
        return {
            getShipitapps: getShipitapps
        }

        function getShipitapps() {
            return Restangular.all('/api/shipit/shipitapps').getList();
        }
    }
})();
