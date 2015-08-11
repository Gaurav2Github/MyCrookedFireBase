/**
 * Created by reuben on 5/08/15.
 */
"use strict";

//your own firebase url
var firebaseURL = "https://glaring-fire-8569.firebaseio.com/"

angular.module('crookedFireApp.services', []).factory("Auth", ["$firebaseAuth","$firebaseObject",
    function($firebaseAuth, $firebaseObject) {

        return {

            init: function() {
                var ref = new Firebase(firebaseURL);
                return $firebaseAuth(ref);
            },

            roles: function () {
                var ref = new Firebase(firebaseURL + 'roles');
                return $firebaseObject(ref);
            },

            rolesById: function(uid) {
                var ref = new Firebase(firebaseURL + 'roles/' + uid);
                return $firebaseObject(ref);
            }

        }


    }
]).factory("FireFactory", ["$firebaseArray","$firebaseObject",
    function($firebaseArray, $firebaseObject) {

        var serviceProvider = function(){
            this.name = '';
            this.data = [];
            this.single = {};
        }

        var model = {
            getInstance:function(){ return new serviceProvider(); }
        }

        serviceProvider.prototype.init = function(name){
            this.name = name;
            return this;
        }

        serviceProvider.prototype.getAll = function () {
            var url = firebaseURL + this.name;
            var ref = new Firebase(url);
            this.data = $firebaseArray(ref);
            return this.data;
        }

        serviceProvider.prototype.getOne = function (key) {
            var url = firebaseURL + this.name;
            // create a reference to the database where we will store our data
            var ref = new Firebase(url);
            var objectRef = ref.child(key);
            // return it as a synchronized object
            this.single = $firebaseObject(objectRef);
            return this.single;
        }

        return model;

    }
]);