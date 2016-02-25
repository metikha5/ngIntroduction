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
    });


    angular.module('demo.people')
        .factory('Dude', factoryDude);

    factoryDude.$inject = [
        '$http'
    ];

    function factoryDude($http) {

        function Dude(id, firstname, lastname, age) {
            this.id = id;
            this.firstname = firsntame;
            this.lastname = lastname;
            this.age = age;

            this.getId = function() {
                return this.id;
            };

            this.printInfo = function() {
                console.log('Hi! I\'am ' + this.firstname + 'and I\'am ' + this.age);
            };

            this.getInfo = function() {
                $http.get('myurl.com/dude' + this.id).then(function(dude) {
                    console.log('Dude get > ', dude);
                });
            };

            this.setInfo = function() {
                $http.post('myurl.com/dude/' + this.id, {
                    firstname: firstname
                    lastname: lastname,
                    age: age
                }).then(function() {
                    console.log('New dude !!');
                });
            };
        }
        return Dude;
    }

})();