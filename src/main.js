import _ from 'underscore';
import {Events} from 'backbone';
import Generations from './collections/Generations';
import GenerationLinks from './views/GenerationLinks';
import GenerationPokemon from './views/GenerationPokemon';

(function () {
    let setGlobalVariables = function () {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
    * Run after dom is ready
    */
    let init = function () {
        setGlobalVariables();
        let generationsCollection = new Generations();
        new GenerationLinks({el: '#generation-links'});
        new GenerationPokemon({el: '#generation-pokemon', collection: generationsCollection});

        Backbone.history.start({pushState: true, root: '/pokedex/'});
    };

    window.addEventListener('load', init);
})();

