import {FETCH_USER, LOGGED_IN, LOGGING_IN} from '../actions/types';
import {authInitial} from "./initialState";
import {AUTH_STATE} from "../helpers";

export default function(state = authInitial, action){
    switch(action.type){
        case FETCH_USER:
            return {...state, user: action.payload};
        case LOGGING_IN:
            return {...state, authState:AUTH_STATE.LOGGING_IN};
        case LOGGED_IN:
            if(action.payload === 'err')
                return {...state, authState:AUTH_STATE.FAIL};
            else
                return {...state, authState:AUTH_STATE.SUCCESS, user:action.payload};
        default:
            return state;
    }
}
