/**
 * Created by Arman Jalalian on 5/31/2017.
 */
import {Router} from 'backbone';

const GenerationsRouter = Router.extend({
    routes: {
        'generation/:id' : 'generationAction'
    },
    generationAction: function (id) {
        App.events.trigger('newGeneration', {
            id: id
        });
    }
});

export default GenerationsRouter;