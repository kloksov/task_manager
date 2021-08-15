import * as actions from '../actions/action_notes';

export const addNote = (value) => ({
    type: actions.ACTION_ADD_NOTE,
    value,
});