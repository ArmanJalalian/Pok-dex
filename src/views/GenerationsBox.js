/**
 * Created by Arman Jalalian on 5/30/2017.
 */
import {View} from 'backbone';
import

const GenerationsBox = View.extend({
    events: {
        'click': 'clickHandler'
    },
    clickHandler: function (e) {
        e.preventDefault();
        this.loadGenerations();
    },
    loadGenerations: function () {

    }
});

export default GenerationsBox;