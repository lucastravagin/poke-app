app.controller('PokemonCtrl', [
    'tabs',
    PokemonController

    ])

    function PokemonController(tabs) {

        const vm = this

        //Busca os pokemons
        vm.getPokemons = () => {
            tabs.show(vm, {tabList: true, tabCreate: true})
        }
        
        vm.getPokemons()

        vm.showTabUpdate = () => {
            tabs.show(vm, {tabUpdate: true})
        }

         vm.showTabDelete = () => {
            tabs.show(vm, {tabDelete: true})
        }

        vm.cancel = () => {
            tabs.show(vm, {tabList: true, tabCreate: true})
        }
    }
