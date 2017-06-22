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
        .config(config);

    config.$inject = ['$stateProvider', 'RestangularProvider', 'AuthenticationProvider'];

    function config($stateProvider, RestangularProvider, AuthenticationProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/shipit/shipit.html',
                controller: 'ShipitappsController',
                controllerAs: 'vm'
            });
        RestangularProvider.setFullResponse(true);
    }
})();
