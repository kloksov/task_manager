import { combineReducers} from 'redux';
import dirs from './dirs';
import notes from './notes';

const reducers = combineReducers({
    dirs,
    notes,
});

export default reducers;