app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: "/dashboard",
            templateUrl: "dashboard/dashboard.html"
        }).state('pokemon', {
            url: "/pokemon",
            templateUrl: "pokemon/tabs.html"
        })

        $urlRouterProvider.otherwise('/dashboard')
    }
])