(function () {
    'use strict';
    angular.module('app.core').directive('nqDisabled', nqDisabled);

    nqDisabled.$inject = [];

    function nqDisabled() {
        var directive = {
            link: link,
            restrict: 'A'            
        };
        return directive;

        function link(scope, element, attrs, ngModel) {

            scope.$watch(function () {
                return attrs.nqDisabled;

            }, function ( nv,ov) {
                if (nv == 'true') {
                    element[0].previousElementSibling.disabled = true;
                } else {
                    element[0].previousElementSibling.disabled = false;
                };

            })


            
            
        }
    }


})()