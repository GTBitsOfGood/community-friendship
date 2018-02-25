import {combineReducers} from 'redux';
import authreducer from './authreducer';

export default combineReducers({
    auth:authreducer,
})

function rootReducer(state = {name: 'Horizons'}, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default rootReducer;
