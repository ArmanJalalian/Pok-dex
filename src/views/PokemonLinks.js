/**
 * Created by Arman Jalalian on 6/8/2017.
 */
import {View} from 'backbone';
import PokemonRouter from '../routers/PokemonRouter';

/**
 * Object representing the PokemonLinks element
 *
 * @constructor
 */
const PokemonLinks = View.extend({
    router: null,
    events: {
        'click a': 'clickHandler',
    },
    initialize: function () {
        this.router = new PokemonRouter();
        console.log("test");
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e) {
        e.preventDefault();

        console.log("test from pokemon clicker");

        //Get target the retrieve data properties
        let target = e.currentTarget;
        let url = 'pokemon/' + target.dataset['pokemonid'];

        console.log(target);

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace:true});
    }
});

export default PokemonLinks;