const express = require('express')


module.exports = function(server) {


    const router = express.Router()
    server.use('/api', router)


    const pokemonService = require('../api/pokemon/pokemon.service')
    pokemonService.register(router, '/billingCycles')

}