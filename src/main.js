import GenerationsBox from './views/GenerationsBox';

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
        //new GenerationsBox = ({el: "#load", model: GenerationsBox});
    };
    window.addEventListener('load', init);
})();

