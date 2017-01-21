(function() {
    'use strict';

    angular
        .module('shipItApp')
        .controller('NavigationController', NavigationController);

    NavigationController.$inject = ['$state', 'Authentication'];

    function NavigationController($state, Authentication) {
        var vm = this;
        vm.authenticated = false;
        vm.user = "N/A";

       userAuthenticated();


       function userAuthenticated() {
           return Authentication.resolveUser().then(function(response){
               vm.user = response.user;
               vm.authenticated = true;
               $state.go('home');
           }, function() {
                vm.user = null;
                vm.authenticated = false;
           });
       }
    }
})();
