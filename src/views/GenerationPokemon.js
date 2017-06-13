/**
 * Created by Arman Jalalian on 5/31/2017.
 */
import {View} from 'backbone';
import _ from 'underscore';
import Pokemons from '../collections/Pokemons';
import PokemonLinks from '../views/PokemonLinks';
import PokemonDetails from '../views/PokemonDetails';

/**
 * Object representing the GenerationPokemon element
 *
 * @constructor
 */
const GenerationPokemon = View.extend({
    templateGenerations: '',
    templateError: '',
    initialize: function () {

        //Set template to use later on view
        this.templateGenerations = _.template(this.$('#template-generations').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new generation
        App.events.on('newGeneration', this.loadGenerations, this);
    },

    remove: function () {
        console.log("remove deze shit");
    },

    /**
     * Wrapper function to load the generations through the collection
     *
     * @param data
     */
    loadGenerations: function (data) {
        this.collection.id = data.id;
        this.collection.fetch({
            success: (collection) => this.loadGenerationsSuccessHandler(collection),
            error: (collection) => this.loadGenerationsErrorHandler(collection),
        });
    },

    /**
     * Success Handler will add HTML of generations to this $el
     *
     * @param collection
     */
    loadGenerationsSuccessHandler: function (collection) {
        this.$el.html(this.templateGenerations({generations: collection.models}));

        let pokemonCollection = new Pokemons;
        new PokemonLinks({el: '.pokemon-links'});
        new PokemonDetails({el: '#pokemon-details', collection: pokemonCollection});

    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadGenerationsErrorHandler: function (collection, response) {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default GenerationPokemon;