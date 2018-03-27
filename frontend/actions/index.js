
// Action Creators
import axios from 'axios';
import {FETCH_USER, ADD_EVENT} from "./types";

export const fetchUser = () => dispatch => {
    const res = axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};





