//Controllers
weatherApp.controller('mainController', ['$scope', '$location', 'cityForecast', function ($scope, $location, cityForecast) {
        $scope.city = cityForecast.city;
        $scope.$watch('city', function () {
                cityForecast.city = $scope.city;
        });
        $scope.submit = function () {
                $location.path('/forecast');
        }

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityForecast', function ($scope, $resource, $routeParams, cityForecast) {
        $scope.city = cityForecast.city;
        $scope.days = $routeParams.days || '2';

        //variable thatcontains the call
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
                get: {
                        method: "JSONP"
                }
        });
        $scope.weatherResult = $scope.weatherAPI.get({
                q: $scope.city,
                cnt: $scope.days,
                appId: '931de0cd758b3ad04016885835ec9d3d'
        });

        //        console.log($scope.weatherResult);

        $scope.convertToFahrenheit = function (degK) {
                return Math.round((1.8 * (degK - 273)) + 32);
        }

        $scope.convertToDate = function (dt) {
                return new Date(dt * 1000);
        }
}]);
/*Example of the API link for a two day forecast
http: //api.openweathermap.org/data/2.5/forecast/daily?APPID=931de0cd758b3ad04016885835ec9d3d&q=London&cnt=2*/
