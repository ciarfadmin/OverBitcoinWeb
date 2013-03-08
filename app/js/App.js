var mainApp = angular.module('mainApp', []);

mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'app/partials/main.html',   controller: MainCtrl}).
      when('/users', {templateUrl: 'app/partials/users.html', controller: UsersCtrl}).
      when('/users/:id', {templateUrl: 'app/partials/userDetails.html', controller: UserDetailsCtrl}).
      when('/signup', {templateUrl: 'app/partials/signUp.html', controller: SignUpCtrl}).
      otherwise({redirectTo: '/'});
}]);

//Format filters in http://momentjs.com/
mainApp.filter('moment', function() {
    return function(dateString, format) {
        return moment(dateString).format(format);
    };
});


