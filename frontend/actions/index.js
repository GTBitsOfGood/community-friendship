import * as axios from 'axios';
import * as qs from "qs";
import {FETCH_USER, LOGGING_IN} from "./types";

// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/auth/current_user');
//     dispatch({type: FETCH_USER, payload: res.data});
// };

export const login = (user,pass) => async dispatch => {
    console.log('loggin in');
    const res = await axios.post('/api/auth/login', qs.stringify({username:user, password:pass}));
    console.log(res);
    dispatch({type: LOGGING_IN, payload:res});
};