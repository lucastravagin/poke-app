(function() {

    app.controller('PokemonCtrl', [
        'tabs',
        '$http',
        'consts',
        PokemonController

    ])

    function PokemonController(tabs, $http, consts) {

        const vm = this
        const url = `${consts.apiUrl}/pokemons`

        let initAtackAndDefense = () => {
            if (!vm.pokemon.atack || !vm.pokemon.atack.length) {
                vm.pokemon.atack = []
                vm.pokemon.atack.push({})
            }

            if (!vm.pokemon.defense || !vm.pokemon.defense.length) {
                vm.pokemon.defense = []
                vm.pokemon.defense.push({})
            }
        }

        //Busca os pokemons
        vm.getPokemons = () => {
            $http.get(url).then((resp) => {
                vm.pokemons = resp.data
                vm.pokemon = {}
                initAtackAndDefense()
                tabs.show(vm, { tabList: true, tabCreate: true })
            })
        }

        vm.createPokemon = () => {
            $http.post(url, vm.pokemon).then((resp) => {
                vm.billingCycle = {}
            }).catch((err) => {

            })
        }





        vm.showTabUpdate = () => {
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = () => {
            tabs.show(vm, { tabDelete: true })
        }

        vm.cancel = () => {
            tabs.show(vm, { tabList: true, tabCreate: true })
        }

        vm.getPokemons()
    }

})()