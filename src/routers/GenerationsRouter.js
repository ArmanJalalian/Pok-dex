/**
 * Created by Arman Jalalian on 5/31/2017.
 */
import {Router} from 'backbone';

/**
 * Router for the generations URL's
 *
 * @constructor
 */
const GenerationsRouter = Router.extend({
    routes: {
        'generation/:id' : 'generationAction'
    },

    /**
     * Route callback, used to trigger global event
     *
     * @param id
     */
    generationAction: function (id) {
        App.events.trigger('newGeneration', {
            id: id
        });
        App.events.trigger('removePokemon', {});
    }
});

export default GenerationsRouter;