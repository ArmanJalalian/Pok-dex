/**
 * Created by Arman Jalalian on 5/31/2017.
 */
import {Collection} from 'backbone';
import Generation from '../models/Generation';

/**
 * Collection for the generations endpoint
 *
 * @constructor
 */
const Generations = Collection.extend({
    id: '',
    model: Generation,
    url: function () {
        return 'http://pokeapi.co/api/v2/generation/' + this.id;
    }
});

export default Generations;