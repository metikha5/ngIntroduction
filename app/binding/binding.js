(function () {
    angular.module('demo.binding', [])

    .config(['$stateProvider', RouteConfig])
    .controller('BindingCtrl', ['$scope', BindingController]);

    function RouteConfig($stateProvider) {
        $stateProvider.state('binding', {
            url: '/binding',
            views: {
                'content@': {
                    templateUrl: 'binding/binding.html',
                    controller: 'BindingCtrl'
                },
                'header@': {
                    template: '<h4>Binding</h4>'
                },
                'footer@': {
                    templateUrl: 'layout/footer.html'
                }
            }
        });
    }

    function BindingController($scope) {
        $scope.world = 'world'
    }
})();