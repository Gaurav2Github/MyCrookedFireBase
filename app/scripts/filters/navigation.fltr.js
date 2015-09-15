/**
 * Created by reuben on 10/11/14.
 */
"use strict";

angular.module('crookedFireApp.filters', []).filter('tabsFilter', function () {
    return function (tabs, roles) {

        var arr = [];

        //load public tabs
        for (var i = 0; i < tabs.length; i++) {
            for (var j = 0; j < tabs[i].roles.length; j++) {
                if (tabs[i].roles[j] === '') {
                    arr.push(tabs[i]);
                    j = tabs[i].roles.length;
                }
                if (roles && roles[tabs[i].roles[j]]) {
                    arr.push(tabs[i]);
                    j = tabs[i].roles.length;
                }
            }
        }

        return arr;
    };
});
