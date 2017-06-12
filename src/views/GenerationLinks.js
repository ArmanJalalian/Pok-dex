/**
 * Created by Arman Jalalian on 5/31/2017.
 */
import {View} from 'backbone';
import GenerationsRouter from '../routers/GenerationsRouter';

/**
 * Object representing the GenerationLinks element
 *
 * @constructor
 */
const GenerationLinks = View.extend({
    router: null,
    events: {
        'click a': 'clickHandler'
    },
    initialize: function () {
        this.router = new GenerationsRouter();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e) {
        e.preventDefault();

        //Get target then retrieve data properties
        let target = e.currentTarget;
        let url = 'generation/' + target.dataset['id'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default GenerationLinks;