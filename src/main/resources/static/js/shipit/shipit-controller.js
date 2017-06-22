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
        .controller('ShipitappsController', ShipitappsController);

    ShipitappsController.$inject = ['shipitappsService', '$http', '$window'];

    function ShipitappsController(shipitappsService, $http, $window) {
        var vm = this;
        vm.shipitapps;
        vm.showErrorPage = false;
        getShipitapps();

        function getShipitapps() {
            return shipitappsService.getShipitapps().then(
                function(response){
                    vm.shipitapps = response.data;
                },
                function(error) {
                    if(error.status === 401) {
                        $http.post("logout")
                            .then(function(data, status, headers, config){
                                $window.location.href = "/login";
                             })
                             .catch(function(error){
                                console.log("Error during logout:" + error);
                             });
                    }
                });
        };

    }

})();
