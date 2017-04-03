/**
 * App
 * --------------------------------------------------
 */

(function() {
    'use strict';

    // Initialize
    angular
        .module('app', []);

})();


/**
 * Main Controller
 * --------------------------------------------------
 */

(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', MainCtrl);

    // Inject dependencies
    MainCtrl.$inject = ['$scope', 'userService'];

    function MainCtrl($scope, userService) {
        var vm = this;
        vm.users = [];
        vm.loading = true;

        // Widget title
        vm.title = 'People Search';

        /**
         * Functions displays modal with user info
         */
        vm.showUserInfo = function(user) {
            vm.user = user;
            $scope.$broadcast('toggleModal', true);
        };

        // Initialize user data set
        getUsers();

        /**
         * Fetch user data via service and update the scope
         */
        function getUsers() {
            return userService.getUsers().then(function(data) {
                vm.users = data;
                vm.loading = false;
                return vm.users;
            });
        }

    }

})();



/**
 * User Service Factory
 * --------------------------------------------------
 */

(function() {
    'use strict';

    angular
        .module('app')
        .factory('userService', userService);

    userService.$inject = ['$http'];

    /**
     * User service
     */
    function userService($http) {
        return {
            getUsers: getUsers,
            getUser: getUser
        };

        /**
         * Get all users
         */
        function getUsers() {
            return $http.get('http://jsonplaceholder.typicode.com/users')
                .then(getUsersSuccess)
                .catch(getUsersError);
        }

        /**
         * Get user by id
         */
        function getUser(id) {
            return $http.get('http://jsonplaceholder.typicode.com/users?id=' + id)
                .then(getUsersSuccess)
                .catch(getUsersError);
        }

        /**
         * Success handler
         */
        function getUsersSuccess(response) {
            return response.data;
        }

        /**
         * Error handler
         */
        function getUsersError(error) {
            console.log('Error getting user data: ' + error.data);
        }
    }

})();

/**
 * Search Filter
 * --------------------------------------------------
 */

(function() {
    'use strict';

    angular
        .module('app')
        .filter('searchFor', searchFor);

    function searchFor() {
        return function(arr, searchString) {
            // If no input provided return the whole set
            if (!searchString) {
                return arr;
            }
            var results = [];
            searchString = searchString.toLowerCase();
            angular.forEach(arr, function(user) {
                // Filter data via email or name
                if (user.name.toLowerCase().indexOf(searchString) !== -1 ||
                    user.email.toLowerCase().indexOf(searchString) !== -1) {
                    results.push(user);
                }
            });
            return results;
        };
    }

})();

/**
 * Main Controller
 * --------------------------------------------------
 */

(function() {
    'use strict';
    angular
        .module('app')
        .directive('modalWindow', modalWindow);

    // Inject document dependency
    modalWindow.$inject = ['$document'];

    function modalWindow($document) {

        return {
            restrict: 'E',
            scope: {
                data: '=',
                show: '='
            },
            template: ['<figure ng-class="{ \'is-active\' : show }" class="c-modal">',
                '<div ng-click="close()" class="c-modal__overlay"></div>',
                '<div class="c-modal__body">',
                '<div class="c-modal__content">',
                '<button ng-click="close()" class="c-modal__close">&#10005;</button>',
                '<h4 class="c-modal__title">{{ data.name }}</h4>',
                '<p class="c-modal__label">E-mail</p>',
                '<p class="c-modal__data">',
                '<a class="u-text-lowercase" href="mailto:{{ data.email }}">{{ data.email }}</a></p>',
                '<p class="c-modal__label">Phone</p>',
                '<p class="c-modal__data">{{ data.phone }}</p>',
                '<p class="c-modal__label">Address</p>',
                '<p class="c-modal__data">{{ data.address.street }}, {{ data.address.suite }}, ',
                '{{ data.address.city }}, {{ data.address.zipcode }}</p>',
                '<p class="c-modal__label">Website</p>',
                '<p class="c-modal__data">',
                '<a target="_blank" href="http://{{ data.website }}">{{ data.website}}</a></p>',
                '<p class="c-modal__label">Company</p>',
                '<p class="c-modal__data">{{ data.company.name }}</p>',
                '</div>',
                '</div>',
                '</figure>'
            ].join(''),

            link: function(scope, element, attrs) {

                /**
                 * Close modal
                 */
                scope.close = function() {
                    toggle();
                };

                /**
                 * Create handler for keydown event
                 */
                function escHandler(event) {
                    if (event.keyCode === 27) {
                        toggle();
                        scope.$apply();
                    }
                }

                /**
                 * Toggle modal
                 */
                function toggle() {
                    scope.show = !scope.show;
                }

                scope.$on('toggleModal', toggle);

                /**
                 * Attach handler to event
                 */
                $document.on('keydown', escHandler);

            }

        };
    }

})();