/**
 * Created by reuben on 5/08/15.
 */
"use strict";

//your own firebase url
var firebaseURL = "https://glaring-fire-8569.firebaseio.com/"

angular.module('crookedFireApp.services', []).factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase(firebaseURL);
        return $firebaseAuth(ref);
    }
]).factory("Entries", ["$firebaseArray",
    function($firebaseArray) {
        var url = firebaseURL + 'entries';
        var ref = new Firebase(url);
        return $firebaseArray(ref);
    }
]).factory("Examples", ["$firebaseArray","$firebaseObject",
    function($firebaseArray, $firebaseObject) {
        return {
           getAll: function () {
               var url = firebaseURL + 'examples'
               var ref = new Firebase(url);
               return $firebaseArray(ref);
           },
           getExample: function(key) {
               var url = firebaseURL + 'examples';
               // create a reference to the database where we will store our data
               var ref = new Firebase(url);
               var exampleRef = ref.child(key);
               // return it as a synchronized object
               return $firebaseObject(exampleRef);
           }
        }
    }
]);