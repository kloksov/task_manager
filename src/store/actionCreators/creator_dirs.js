import * as actions from '../actions/action_dirs';

export const addDir = (value) => ({
    type: actions.ACTION_ADD_DIR,
    value,
});