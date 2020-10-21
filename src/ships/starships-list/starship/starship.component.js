(function() {

    'use strict';
    angular
        .module('app')
        .component('starship', {
            controller: StarshipController,
            templateUrl: './ships/starships-list/starship/starship.component.html',
            bindings: {
                starship: '<',
            }
        })

    function StarshipController() {
        var ctrl = this;
        ctrl.shipId = "";
        ctrl.bExisteImagen = false;

        ctrl.$onInit = function() {
            getStarshipId();
            ctrl.bExisteImagen = (UrlExists('https://starwars-visualguide.com/assets/img/starships/' + ctrl.shipId + '.jpg'));
            //            if (!ctrl.bExisteImagen) console.log('ship: ' + ctrl.starship.name + ': ' + ctrl.shipId + ' / ' + ctrl.shipID);

        };

        function getStarshipId() {
            var url = ctrl.starship.url;
            //            console.log('url ship: ' + ctrl.starship.url);
            ctrl.shipId = url.split("/").filter(function(item) {
                return item !== "";
            }).slice(-1)[0];
        }

        function UrlExists(url) {
            var http = new XMLHttpRequest();
            http.open('HEAD', url, false);
            http.send();
            return http.status != 404;
        }
    }


})();