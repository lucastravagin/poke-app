(function() {
    app.constant('consts', {
        appName: 'Poke APP',
        version: '1.0',
        owner: 'Lucas Travagin',
        year: '2019',
        apiUrl: 'http://localhost:3003/api'
    }).run(['$rootScope', 'consts', function($rootScope, consts) {
        $rootScope.consts = consts
    }])
})()