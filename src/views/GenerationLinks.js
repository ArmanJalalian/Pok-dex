/**
 * Created by Arman Jalalian on 5/31/2017.
 */
import {View} from 'backbone';
import GenerationsRouter from '../routers/GenerationsRouter';

const GenerationLinks = View.extend({
    router: null,
    events: {
        'click a': 'clickHandler'
    },
    initialize: function () {
        this.router = new GenerationsRouter();
    },
    clickHandler: function (e) {
        e.preventDefault();

        let target = e.currentTarget;
        let url = 'generation/' + target.dataset['id'];

        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default GenerationLinks;