import {combineReducers} from 'redux';
import authReducer from './authReducer';
import pdfReducer from './pdfReducer';

export default combineReducers({
    auth: authReducer,
    pdf: pdfReducer
});