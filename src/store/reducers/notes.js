import * as actions from '../actions/action_notes';

const notes = (state = [], action) => {
    switch (action.type) {
        case actions.ACTION_ADD_NOTE:
            return [
                action.value,
                ...state,
            ];
        case actions.ACTION_EDIT_NOTE:
        case actions.ACTION_DEL_NOTE:
        default:
            return state;
    }
};

export default notes;