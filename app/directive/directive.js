(function () {
    angular.module('demo.directive', [])

    .config(['$stateProvider', RouteConfig])
    .controller('MainCtrl', ['$scope', MainController]);

    function RouteConfig($stateProvider) {
        $stateProvider.state('directive', {
            url: '/directive',
            views: {
                'content@': {
                    templateUrl: 'directive/directive.html',
                    controller: 'MainCtrl'
                },
                'header@': {
                    template: '<h4>Directives</h4>'
                },
                'footer@': {
                    templateUrl: 'layout/footer.html'
                }
            }
        });
    }

    function MainController($scope) {
        $scope.authors = []
    }
})();