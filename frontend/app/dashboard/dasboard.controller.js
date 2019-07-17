(function() {
    app.controller('DashboardCtrl', [
        '$http',
        'consts',
        DashboardController
    ])

    function DashboardController($http, consts) {
        const vm = this

        vm.datas = { pokemons: 2.852 }

        vm.getSummary = function() {
            vm.total = vm.datas
        }

        vm.getSummary()
    }
})()