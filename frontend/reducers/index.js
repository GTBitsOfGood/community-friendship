
import {CHANGE_HANDBOOK_PAGE} from "../actions/types";

function rootReducer(state = {name: 'Horizons'}, action) {
    switch (action.type) {
        case CHANGE_HANDBOOK_PAGE:
            return Object.assign({}, state, {
                handbookPage: action.page
            });
            break;
        default:
            return state;

    }
}

import {combineReducers} from 'redux';
import authReducer from './authReducer';


export default combineReducers({
    auth: authReducer,
})