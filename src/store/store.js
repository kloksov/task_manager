import { createStore } from 'redux';
import reducers from './reducers/reducers';
import initial_state from './initialState';

const store = createStore(reducers, initial_state);

export default store;