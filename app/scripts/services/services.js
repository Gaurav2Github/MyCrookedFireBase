/**
 * Created by reuben on 5/08/15.
 */

"use strict";

angular.module('dineApp.services', []).factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://glaring-fire-8569.firebaseio.com/");
        return $firebaseAuth(ref);
    }
]);