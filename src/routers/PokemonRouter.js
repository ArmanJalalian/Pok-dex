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
        'pokemon/:id': 'pokemonAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param pokemonId
     */
    pokemonAction: function (id) {
        App.events.trigger('newPokemon', {
            id: id
        });
        App.events.trigger('removeGeneration', {});
    }
});

export default PokemonRouter;