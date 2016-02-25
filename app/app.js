(function() {
    'use strict';

    angular.module('demo', [
        'ui.router',

        'demo.people',
        'demo.binding'
    ])
    .config(['$urlRouterProvider', '$stateProvider', AppConfig]);

    function AppConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'home/home.html'
                },
                'header': {
                    template: '<h4>Home</h4>'
                }
            }
        });
    }

})();