/*************************************************************************
 * ULLINK CONFIDENTIAL INFORMATION
 * _______________________________
 *
 * All Rights Reserved.
 *
 * NOTICE: This file and its content are the property of Ullink. The
 * information included has been classified as Confidential and may
 * not be copied, modified, distributed, or otherwise disseminated, in
 * whole or part, without the express written permission of Ullink.
 ************************************************************************/

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
