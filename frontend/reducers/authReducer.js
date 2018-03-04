import {FETCH_USER, LOGGED_IN, LOGGING_IN} from '../actions/types';
import {authInitial} from "./initialState";
import {AUTH_STATE} from "../helpers";

export default function (state = authInitial, action) {
    switch (action.type) {
        case FETCH_USER:
            if (action.payload)
                return {...state, authState: AUTH_STATE.LOGGED_IN, user: action.payload};
            else
                return {...state, authState: AUTH_STATE.NOTHING, user: null};
        case LOGGING_IN:
            return {...state, authState: AUTH_STATE.LOGGING_IN};
        case LOGGED_IN:
            if (action.payload === 'err')
                return {...state, authState: AUTH_STATE.FAIL};
            else
                return {...state, authState: AUTH_STATE.LOGGED_IN, user: action.payload};
        default:
            return state;
    }
}
