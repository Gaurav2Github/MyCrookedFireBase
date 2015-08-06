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
]);