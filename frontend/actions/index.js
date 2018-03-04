import * as axios from 'axios';
import * as qs from "qs";
import {FETCH_USER, LOGGED_IN, LOGGING_IN} from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/auth/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const login = (user,pass) => async dispatch => {
    dispatch({type:LOGGING_IN});
    const res = await axios.post('/api/auth/login', qs.stringify({username:user, password:pass}));
    dispatch({type: LOGGED_IN, payload:res.data});
};

// export const register = (user,pass) => async dispatch => {
//     const res = await axios.post('/api/auth/register', qs.stringify({username:user, password:pass}));
//     dispatch({type: LOGGING_IN, payload:res.data});
// };
