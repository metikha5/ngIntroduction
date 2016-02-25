(function () {
    angular.module('demo.people')

    .service('dudeService', function ($http) {
        this.getAll = function () {
            return [
                {
                    id: 1,
                    firstname: 'John',
                    lastname: 'Coffey',
                    age: 43
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Cena',
                    age: 38
                },
                {
                    id: 3,
                    firstname: 'John',
                    lastname: 'Travolta',
                    age: 62
                }
            ];
        };

        this.remove = function (id) {
            $http.delete('http://mon-api.com/dude/' + id);
        };
    })
    .factory('dudeFactory', function ($http) {
        return {
            getAll: function () {
                return  [
                    {
                        id: 1,
                        firstname: 'John',
                        lastname: 'Coffey',
                        age: 43
                    },
                    {
                        id: 2,
                        firstname: 'John',
                        lastname: 'Cena',
                        age: 38
                    },
                    {
                        id: 3,
                        firstname: 'John',
                        lastname: 'Travolta',
                        age: 62
                    }
                ];
            }
        };
    });
})();