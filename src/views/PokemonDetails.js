/**
 * Created by Arman Jalalian on 6/12/2017.
 */
import {View} from 'backbone';
import _ from 'underscore';

/**
 * Object representing the PokemonDetails element
 *
 * @constructor
 */
const PokemonDetails = View.extend({
    /*templatePokemons = '',
    templatePokemonError = '',*/
    initialize: function () {

        //Set template to use later on view
        /*this.templatePokemons = _.template(this.$('#template-pokemons').html());
        this.templatePokemonError = _.template(this.$('#template-pokemon-error'));*/

        App.events.on('newPokemon', this.loadPokemons, this);
    },

    /**
     * Wrapper function to load the pokemon through the collection
     *
     * @param data
     */
    loadPokemons: function (data) {
        this.collection.id = data.id;
        this.collection.fetch({
            success: (collection) => this.loadPokemonSuccessHandler(collection),
            error: (collection) => this.loadPokemonErrorHandler(collection),
        });
    },

    /**
     * Success Handler will add HTML of pokemon to this $el
     *
     * @param collection
     */
    loadPokemonSuccessHandler: function (collection) {
        //this.$el.html(this.templatePokemons({pokemons: collection.models}));
        console.log(collection);
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadPokemonErrorHandler: function (collection, response) {
        //this.$el.html(this.templatePokemonError({message: response.responseJSON.error}));
    }
});

export default PokemonDetails;