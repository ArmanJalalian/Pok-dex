/**
 * Created by Arman Jalalian on 6/8/2017.
 */
import {Router} from 'backbone';

/**
 * Router for the pokemons URL's
 *
 * @constructor
 */
const PokemonRouter = Router.extend({
    routes: {
        'pokemon/:pokemonId': 'pokemonAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param pokemonId
     */
    pokemonAction: function (pokemonId) {
        App.events.trigger('newPokemon', {
            pokemonId: pokemonId
        });
    }
});

export default PokemonRouter;