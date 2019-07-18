(function() {

    app.controller('PokemonCtrl', [
        'tabs',
        '$http',
        'consts',
        'msgs',
        PokemonController

    ])

    function PokemonController(tabs, $http, consts, msgs) {

        const vm = this
        const url = `${consts.apiUrl}/pokemons`

        let initAtackAndDefense = () => {
            console.log()
            if (!vm.pokemon.atacks || !vm.pokemon.atacks.length) {
                vm.pokemon.atacks = []
                vm.pokemon.atacks.push({})
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
            }).catch((resp) => {
                msgs.addError(resp.data.errors)
            })
        }

        vm.createPokemon = () => {
            $http.post(url, vm.pokemon).then((resp) => {
                vm.pokemon = {}
                initAtackAndDefense()
                vm.getPokemons()
                msgs.addSuccess('Pokemon Cadastrado com sucesso')
            }).catch((resp) => {
                msgs.addError(resp.data.errors)
            })
        }

        vm.addAtack = function(index) {
            vm.pokemon.atacks.splice(index + 1, 0, {})
        }

        vm.deleteAtack = function(index) {
            vm.pokemon.atacks.splice(index, 1)
            initAtackAndDefense()
        }

        vm.addDef = function(index) {
            vm.pokemon.defense.splice(index + 1, 0, { name: null, value: null })
        }


        vm.deleteDef = function(index) {
            vm.pokemon.defense.splice(index, 1)
            initAtackAndDefense()
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