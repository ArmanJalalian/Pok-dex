/**
 * Created by Arman Jalalian on 6/8/2017.
 */
import {Collection} from 'backbone';
import Pokemon from '../models/Pokemon';

/**
 * Collection for the pokemons endpoint
 *
 * @constructor
 */
const Pokemons = Collection.extend({
    id: '',
    model: Pokemon,
    url: function () {
        return 'http://pokeapi.co/api/v2/pokemon/' + this.id + '/';
    }
});

export default Pokemons;