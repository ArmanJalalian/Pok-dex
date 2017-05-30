/**
 * Created by Arman Jalalian on 5/30/2017.
 */
import {Model} from 'backbone';

const Generations = Model.extend({
    url: 'http://pokeapi.co/api/v2/generation'
});

export default Generations;