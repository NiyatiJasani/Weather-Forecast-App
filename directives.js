//DIRECTIVES
weatherApp.directive("weatherReport", function () {
        return {
                restrict: 'E',
                templateUrl: 'directives/weatherReport.html',
                replace: true,
                scope: {
                        weatherDay: "=", // '=' two way binding as we pass an object
                        convertToStandard: "&", //we use '&' when it is a function
                        convertToDate: "&",
                        dateFormat: "@" //interpolated string, one-way binding
                }
        }
});
