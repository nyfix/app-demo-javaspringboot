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
