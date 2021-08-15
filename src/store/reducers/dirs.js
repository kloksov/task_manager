import * as actions from '../actions/action_dirs';

const dirs = (state = [], action) => {
    switch (action.type) {
        case actions.ACTION_ADD_DIR:
            return [
                action.value,
                ...state,
            ];
        case actions.ACTION_EDIT_DIR:
        case actions.ACTION_DEL_DIR:
        default:
            return state;
    }
};

export default dirs;