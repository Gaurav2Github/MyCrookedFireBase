/**
 * Created by reuben on 10/11/14.
 */
angular.module('dineApp.filters', []).filter('tabsFilter', function () {
    return function (tabs, roles) {

        var arr = [];

        for (var i = 0; i < tabs.length; i++) {
            for (var j = 0; j < tabs[i].roles.length; j++) {
                if (roles[tabs[i].roles[j]]) {
                    arr.push(tabs[i]);
                    j = tabs[i].roles.length;
                }
            }

        }
        return arr;
    };
})
