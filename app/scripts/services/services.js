/**
 * Created by reuben on 5/08/15.
 */

angular.module('dineApp.services', [])
    .factory('Entries', function($resource) {

        return $resource('https://glaring-fire-8569.firebaseio.com/entries/:id.json', { id: '@id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        });

    }).factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL, $rootScope) {
        var ref = new Firebase(FIREBASE_URL);
        var auth = $firebaseSimpleLogin(ref);

        var Auth = {
            register: function (user) {
                return auth.$createUser(user.email, user.password);
            },
            login: function (user) {
                return auth.$login('password', user);
            },
            logout: function () {
                auth.$logout();
            },
            resolveUser: function() {
                return auth.$getCurrentUser();
            },
            signedIn: function() {
                return !!Auth.user.provider;
            },
            user: {}
        };

        $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
            console.log('logged in');
            angular.copy(user, Auth.user);
        });
        $rootScope.$on('$firebaseSimpleLogin:logout', function() {
            console.log('logged out');
            angular.copy({}, Auth.user);
        });

        return Auth;
    });