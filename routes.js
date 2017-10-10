//Routes
weatherApp.config(function ($routeProvider) {

        $routeProvider

                .when('/', {
                        templateUrl: 'pages/home.html',
                        controller: 'mainController'
                })
                .when('/forecast', {
                        templateUrl: 'pages/forecast.html',
                        controller: 'forecastController'
                })
                .when('/forecast/:days', {
                        templateUrl: 'pages/forecast.html',
                        controller: 'forecastController'
                })


});

weatherApp.config(['$sceDelegateProvider', function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://api.openweathermap.org/**'
    ]);
}]);
