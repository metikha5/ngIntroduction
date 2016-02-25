(function () {
    angular.module('demo.people', [])

    .config(['$stateProvider', RouteConfig])
    .controller('MainCtrl', ['$scope', 'mathieu', MainController])
    .directive('dude', DudeDirective);

    function RouteConfig($stateProvider) {
        $stateProvider.state('people', {
            url: '/people',
            views: {
                'content@': {
                    templateUrl: 'people/people.html',
                    controller: 'MainCtrl'
                },
                'header@': {
                    template: '<h4>People</h4>'
                },
                'footer@': {
                    templateUrl: 'layout/footer.html'
                }
            },
            onEnter: function () {
                console.log('Bonjour le monde');
            },
            resolve: {
                mathieu: function () {
                    return {
                        firstname: 'Mathien',
                        lastname: 'Delacroix',
                        age: 22
                    };
                }
            }
        });
    }

    function MainController($scope, mathieu) {
        console.log(mathieu);
        $scope.people = [
            {
                firstname: 'John',
                lastname: 'Coffey',
                age: 43
            },
            {
                firstname: 'John',
                lastname: 'Cena',
                age: 38
            },
            {
                firstname: 'John',
                lastname: 'Travolta',
                age: 62
            }
        ];
    }

    function DudeDirective() {
        return {
            restrict: 'E',
            templateUrl: 'people/dude.html',
            scope: {
                person: '='
            },
            controller: function ($scope) {
                $scope.personOnClick = function (person) {
                    console.log('Do something with Mr', person.lastname);
                }
            }
        }
    }
})();