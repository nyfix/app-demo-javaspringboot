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

(function() {
    'use strict';

    angular.module('OauthSentry',[]);

    angular
        .module('OauthSentry')
        .provider('Authentication', AuthenticationProvider);

    function AuthenticationProvider() {
        this.$get = Authentication;

        var basePath = "";

        Authentication.$inject = ['$http', '$q', '$window'];

        function Authentication($http, $q, $window) {
            return {
                resolveUser: resolveUser,
                logout: logout,
                login: login
            };

            function resolveUser() {
                return $http.get(basePath + '/user')
                    .then(checkUserSuccess, checkUserFailed)
                    .catch(checkException);

                function checkUserSuccess(data, status, headers, config) {
                    return {
                        user: data.data.userAuthentication.details,
                        authenticated: true
                    }
                }

                function checkUserFailed(data, status) {
                    return {
                        loginFailureDescription: [data.data.error, data.data.message].join(": "),
                        authenticated: false
                    }
                }

                function checkException(e) {
                    return $q.reject(e);
                }
            }

            function login() {
                $window.location.href = basePath + '/login';
            }

            function logout() {
                return $http.post(basePath + '/logout')
                    .then(logoutSuccess, logoutFailed)
                    .catch(checkException);;

                function logoutSuccess(data, status, headers, config) {
                    return {
                       user: 'N/A',
                       authenticated: false
                    }
                }

                function logoutFailed(e) {
                    console.log("Logout failed");
                    return {
                       user: 'N/A',
                       authenticated: false
                    }
                }

                function checkException(e) {
                    return $q.reject(e);
                }
            }
        }

        this.setBasePath = function(path) {
            basePath = path;
        }
    }
})();
