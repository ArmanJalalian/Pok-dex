/**
 * Created by Arman Jalalian on 5/30/2017.
 */
import {View} from 'backbone';

const GenerationsBox = View.extend({
    initialize: function () {
        this.loadGenerations();
        console.log("Start");
    },
    /*events: {
        'click': 'clickHandler'
    },
    clickHandler: function (e) {
        e.preventDefault();
        this.loadGenerations();
    },*/
    loadGenerations: function () {
        this.model.fetch({
            success: (model, response, options) =>
                this.loadGenerationsSuccessHandler(model, response, options),
            error: (model, response, options) =>
                this.loadGenerationsErrorHandler(model, response, options)
        });
    },
    loadGenerationsSuccessHandler: function (model, response, options) {
        console.log(model);
        console.log(response);
        console.log(options);
    },
    loadGenerationsErrorHandler: function (model, response, options) {
        console.log(model);
        console.log(response);
        console.log(options);
    }
});

export default GenerationsBox;